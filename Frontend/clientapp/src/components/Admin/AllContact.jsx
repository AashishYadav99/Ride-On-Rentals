import { useEffect, useState } from "react";
import Footer from "../Footer";
import ShopNavbar from "./ShopNavbar";
import axios from "axios";

function AllContact() {
  const URL = "http://localhost:9999/shop/allcontacts";
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setContacts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ShopNavbar />
      <h1> All Contacts</h1>
      <table className="table" style={{borderStyle:"groove"}}>
        <thead>
          <tr>
            <th scope="col">SNo.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
           
            <th scope="col">Phone No</th>
            <th scope="col">Query</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} style={{border:"1px",textAlign:"left"}}>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              
              <td>{contact.phoneno}</td>
              <td>{contact.query}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
}

export default AllContact;
