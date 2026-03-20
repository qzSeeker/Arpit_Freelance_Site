import { adminDb } from "../../lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

const getRef = () => adminDb.collection("metrics").doc("views");

export async function GET() {
    try {
        const snap = await getRef().get();
        if (!snap.exists) return Response.json({ views: 0 });
        return Response.json({ views: snap.data()?.count });
    } catch (err) {
        console.error("GET /api/views error:", err);
        return Response.json({ error: "Failed to get views" }, { status: 500 });
    }
}

export async function POST() {
    try {
        const ref = getRef();
        const snap = await ref.get();

        if (!snap.exists) {
        await ref.set({ count: 1 });
        return Response.json({ views: 1 });
        }

        await ref.update({ count: FieldValue.increment(1) }); // atomic
        const updated = await ref.get();
        return Response.json({ views: updated.data()?.count });
    } catch (err) {
        console.error("POST /api/views error:", err);
        return Response.json({ error: "Failed to update views" }, { status: 500 });
    }
}