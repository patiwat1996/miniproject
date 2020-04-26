import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Linkbt = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic"a href = 'https://www.facebook.com/patiwatkuindy.banjongkarn'>
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
             
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          {new Date().getFullYear()} ID : 5835512062
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Linkbt;