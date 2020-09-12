import React from "react";

import cardImage1 from "../../../assets/images/cardImage1.png";
import cardImage2 from "../../../assets/images/cardImage2.jpg";
import cardImage3 from "../../../assets/images/cardImage3.jpg";
import cardImage4 from "../../../assets/images/cardImage4.jpg";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

export const Cards = () => {
  return (
    <section className="d-flex w-100 flex-row pt-5 col">
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src={cardImage1} waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src={cardImage2} waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src={cardImage3} waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src={cardImage4} waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/*<div className="card cardOne">*/}
      {/*  <img className="card-img-top" src={i1} alt="Card cap" />*/}
      {/*  <div className="card-body">*/}
      {/*    <h4 className="card-title">Card title</h4>*/}
      {/*    <p className="card-text">*/}
      {/*      Some quick example text to build on the card title and make up the*/}
      {/*      bulk of the card's content.*/}
      {/*    </p>*/}
      {/*    <button className="btn btn-primary">*/}
      {/*      <Link to={"/"}>Go somewhere</Link>*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="card cardTwo">*/}
      {/*  <img className="card-img-top" src={i2} alt="Card cap" />*/}
      {/*  <div className="card-body">*/}
      {/*    <h4 className="card-title">Card title</h4>*/}
      {/*    <p className="card-text">*/}
      {/*      Some quick example text to build on the card title and make up the*/}
      {/*      bulk of the card's content.*/}
      {/*    </p>*/}
      {/*    <button className="btn btn-primary">*/}
      {/*      <Link to={"/"}>Go somewhere</Link>*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="card cardThree">*/}
      {/*  <img className="card-img-top" src={i3} alt="Card cap" />*/}
      {/*  <div className="card-body">*/}
      {/*    <h4 className="card-title">Card title</h4>*/}
      {/*    <p className="card-text">*/}
      {/*      Some quick example text to build on the card title and make up the*/}
      {/*      bulk of the card's content.*/}
      {/*    </p>*/}
      {/*    <button className="btn btn-primary">*/}
      {/*      <Link to={"/"}>Go somewhere</Link>*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};
