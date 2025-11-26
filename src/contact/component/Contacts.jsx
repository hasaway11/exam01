import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Contact({contact}) {
  const {no, name, address, tel} = contact;
  return (
    <tr>
      <td>{no}</td>
      <td>
        <Link to={`/read?no=${no}`}>{name}</Link>
      </td>
      <td>{address}</td>
      <td>{tel}</td>
    </tr>
  )
}

function Contacts({contacts}) {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>주소</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
      {
        contacts.map(contact=><Contact key={contact.no} contact={contact} />)
      }
      </tbody>
    </Table>
  )
}

export default Contacts