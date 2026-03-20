import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";

const getRef = () => doc(db, "metrics", "views");

export async function GET() {
    try {
        const snap = await getDoc(getRef());
        if (!snap.exists()) return Response.json({ views: 0 });
        return Response.json({ views: snap.data().count });
    } catch (err) {
        console.error("GET /api/views error:", err); // check your terminal for the real error
        return Response.json({ error: "Failed to get views" }, { status: 500 });
    }
}

export async function POST() {
    try {
        const docRef = getRef();
        const snap = await getDoc(docRef);

        if (!snap.exists()) {
        await setDoc(docRef, { count: 1 });
        return Response.json({ views: 1 });
        }

        await updateDoc(docRef, { count: increment(1) });
        const updated = await getDoc(docRef);
        return Response.json({ views: updated.data()?.count });
    } catch (err) {
        console.error("POST /api/views error:", err); // real error here
        return Response.json({ error: "Failed to update views" }, { status: 500 });
    }
}