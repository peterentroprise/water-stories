import firebase from "../../../utils/lib/firebase";

export default (req, res) => {
  firebase
    .collection("messages")
    .where("thread", "==", req.query.name)
    .get()
    .then((querySnapshot) => {
      res.json(querySnapshot.docs.map((doc) => doc.data()));
    })
    .catch((error) => {
      res.json({ error });
    });
};
