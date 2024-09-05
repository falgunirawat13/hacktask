import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCol,
} from "mdb-react-ui-kit";
const DisplayCard = ({title,desc,img}) => {
  return (
    <MDBCol className="d-flex justify-content-center">
    <MDBCard className="custom-card1">
      <MDBCardBody>
        <MDBCardImage className="imagecard" src={img}/>
            
        <MDBCardTitle className="custom-card-title">
         {title}
        </MDBCardTitle>
        <MDBCardText className="custom-card-text">
         {desc}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  )
}

export default DisplayCard