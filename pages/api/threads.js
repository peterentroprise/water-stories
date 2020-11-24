import firebase from "../../utils/lib/firebase";

export default (req, res) => {
  firebase
    .collection("threads")
    .get()
    .then((querySnapshot) => {
      res.json(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    })
    .catch((error) => {
      res.json({ error });
    });
};
