import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./Privacypolicy.scss";

const onDownloadClick = () => {
  // using Java Script method to get PDF file
  fetch('katika_private_policy.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'katika_private_policy.pdf';
          alink.click();
      })
  })
}

export default function Privacypolicy() {
  return (
    <Styles className="mx-4">

        <section className="privacypolicy_section1">
            <Container>
            <Row className="row-walletsection2_2">
               <h3 className="privacy_title">PRIVACY POLICY OF KATIKA sas</h3>    
               <p className="paragraph_privacy">The present document defines the privacy policy of Katika SAS regarding the users' information that it collects through its website <span className="Ocolor"> www.Katika.io </span>
                 and its other products such as LudoKin. 
                It consists  in exposing the way in which Katika collects, uses, keeps and protects the confidential information which is transmitted to its above-mentioned website and products. 
               </p>       

                <h5 className="privacy_h4_sub_titlte">1-	Collected personal data</h5>
                <p className="paragraph_privacy">Within the framework of the subscription of our online services, Katika requires from its customers the supply of some of their personal information through a KYC form; Which form can
                     be filled online or on physical support in the buildings of Katika.
                      This form includes information such as:
                </p> 
                <div class="divcontainer">                 
                    <ol className="list_privatepolicy">
                        <li className="items_list">	First and last names ; </li>
                        <li className="items_list">	Email address and phone number ; </li>
                        <li className="items_list">	Photo ; </li>
                        <li className="items_list">	National identity card ; </li>
                        <li className="items_list">	Passport ; </li>
                        <li className="items_list">	Driver's license ; </li>
                        <li className="items_list">	Identifiers ; </li>
                        <li className="items_list">	Password ; </li>
                        <li className="items_list">	IP address ; </li>
                        <li className="items_list">	Connection logs. </li>                       
                    </ol> 
                </div>

               <h5 className="privacy_h4_sub_titlte">2-	Errors on collected data</h5>
                <p className="paragraph_privacy">It is the responsibility of the clients and users of the site of KATIKA to 
                    verify that the information transmitted in the form is exact and to rectify possible errors.
                     The validity
                     of the offers that KATIKA provides is subordinated to the accuracy of 
                     the answers that the clients provide.
                </p>  

                <h5 className="privacy_h4_sub_titlte">3-	Purposes of the collection of personal data</h5>
                <p className="paragraph_privacy">Personal data of customers are collected in order to: </p> 
                <div class="divcontainer">    
                <ol className="list_privatepolicy">
                    <li  className="items_list">	To verify the identity of the subscribers to the services provided by KATIKA ;</li>
                    <li  className="items_list">	Manage clients' personal spaces and ensure their security ;</li> 
                    <li  className="items_list">	Monitoring customer relations by carrying out operations such as satisfaction surveys, effective follow-up of customer complaints or claims ;</li> 
                    <li  className="items_list">	Management of prospecting and advertising operations ;</li> 
                    <li  className="items_list">	Management of clients' requests for access, rectification and opposition rights ;</li> 
                    <li  className="items_list">	The elaboration of statistics intended to improve the functioning of the website and the quality of our services ;</li> 
                     
                </ol> 
                </div>
                <p className="paragraph_privacy">The collected data may be used for any other legal and regulatory purposes.</p>
            
                <h5 className="privacy_h4_sub_titlte">4-	Recipients of the data</h5>
                <p className="paragraph_privacy">The personal data collected by KATIKA, are processed and used within 
                    the limits of their attributions by the following services:</p>  
                    <div class="divcontainer">  
                <ol className="list_privatepolicy">
                    <li className="items_list">	Our marketing service</li>
                    <li className="items_list">  Our commercial service</li> 
                    <li className="items_list">	Our departments in charge of handling customer relations and your complaints</li> 
                    <li className="items_list">	Our administrative and legal services</li> 
                    <li className="items_list">	Our logistics and IT services</li> 
                    <li className="items_list">	Our services in charge of control (auditor, departments in charge of internal control procedures,...)</li>
                </ol> 
                </div>
               
                <h5 className="privacy_h4_sub_titlte">5-	Retention period for personal information</h5>
                <p className="paragraph_privacy">The personal information of the customers collected by KATIKA is preserved by it throughout the duration of the contractual relation.
                At the end of this relationship, KATIKA reserves the right to keep them for a period of 10 years. This period can be extended if necessary.
                </p> 


                <h5 className="privacy_h4_sub_titlte">6-	Provision of collected personal data to third parties</h5>
                <p className="paragraph_privacy">KATIKA commits itself not to provide to third parties the personal information of the customers that it collects. This provision concerns the transmission of the said data to companies or organizations for commercial or any lucrative purposes.
                KATIKA may make personal information of customers available to business partners or companies and cooperatives in order to provide them with better services, in strict compliance with the procedure for requesting the consent of those concerned. This is possible after informing them of the purpose, content, reason, etc. This information remains confidential if the customer does not give his consent. In the event that the purpose for which the information was requested is canceled, KATIKA will request the Company or organization that requested the information to delete it.
                However, and when required by the laws and regulations of the Republic of Cameroon, KATIKA will transmit the personal data it holds to the administrative or judicial authorities who request it without the consent of the clients concerned being required.
                </p>  

                <h5 className="privacy_h4_sub_titlte">7-	Right of access and communication of data</h5>
                <p className="paragraph_privacy">Customers have the right to access their personal information. However, because of the obligation of safety and confidentiality in the treatment of the personal data which falls to KATIKA, the customer or the user is informed of what his request will be treated subject to the fact that he brings the proof of his identity, in particular by the production of a signed photocopy of his valid identity paper (national identity card, residence permit, passport, etc...).
                KATIKA informs the customer or the user that it will be entitled, if necessary, to oppose the obviously abusive requests (by their number, their repetitive or systematic character).
                </p>  

                <h5 className="privacy_h4_sub_titlte">8-	Right to rectify collected data</h5>
                <p className="paragraph_privacy">Under this right, the customer or user is entitled to request the rectification, updating, blocking or deletion of data concerning him/her which may be inaccurate, erroneous, incomplete or obsolete.
                Requests for the correction of personal information can be made by using a link provided for this purpose on the KATIKA website or by sending a request by registered letter with acknowledgement of receipt or by email.
                Also, the client or user can define general and particular directives concerning the fate of personal data after his/her death by means of a registered letter with acknowledgement of receipt addressed to KATIKA. If necessary, the heirs of a deceased person may, by the above-mentioned means, demand to take into consideration the death of their relative and/or to proceed to the necessary updates.
                </p>
             
                <h5 className="privacy_h4_sub_titlte">9-	Right to oppose</h5>
                <p className="paragraph_privacy">The exercise of this right is only possible in one of the following two situations:</p>
                <div class="divcontainer">  
                <ol className="list_privatepolicy">
                    <li className="items_list">	When the exercise of this right is based on legitimate reasons ;</li>
                    <li className="items_list">	When the exercise of this right is based on legitimate reasons Or when the exercise of this right aims to prevent 
                      the data collected from being used for commercial prospecting purposes.</li> 
                </ol> 
                </div>
                <h5 className="privacy_h4_sub_titlte">10-	Response time</h5>
                <p className="paragraph_privacy">KATIKA undertakes to reply to your request for access, rectification or opposition or any other complementary request for information within a 
                  reasonable period of time which should not exceed 1 month from the receipt of your request.</p>



               <h5 className="privacy_h4_sub_titlte">11-	Storage and protection of user data</h5>
                <p className="paragraph_privacy">KATIKA protects the personal information of customers and users of its site by using secure fault tolerant storage with industry standard encryption and implements a number of security measures to ensure that this information is not lost or misused. or modified, including, but not limited to.
                With regard to personal information obtained and kept in physical form, the documents containing it will be stored in a locked place.
                For information obtained electronically, computer data containing personal information will be stored in computer systems and storage media subject to strict connection restrictions.
                Regarding management measures, only authorized employees are allowed to come into contact with personal information and these employees must comply with internal confidentiality rules for personal data. KATIKA also imposed strict physical access controls to buildings and files.
                As for technical measures, encryption technology such as PCI scanning and secure layered encryption can be used to transmit and store personal information. KATIKA uses various currently available general security technologies and supporting management systems to minimize the risk that customer or site user information may be disclosed, damaged, misused, accessed without authorization, disclosed without authorization, or modified.
                Regarding other measures, the KATIKA web server is protected by a "firewall". It should be noted that it is impossible to guarantee 100% information security. As such, KATIKA asks customers or users of the site to understand the responsibility to independently take security precautions to protect their own personal information. The customers and users of the site agree that KATIKA will not be responsible for information leaks and other losses not caused by its intention or by gross negligence, including but not limited to a hacker attack, a power cut or unavoidable technical failure, to the maximum extent permitted by law.
                If the customer or user believes that their personal information has been compromised, in particular account and / or password information, they must lock their account and immediately contact KATIKA management.
                </p>

                <h5 className="privacy_h4_sub_titlte">12-	Amendment of the privacy policy</h5>
                <p className="paragraph_privacy">The content of the privacy policy can be read at any time on the homepage of the KATIKA website and amendments are made according to the regulations in force, for better service. Customers or users of the site should therefore regularly visit the home page of the site to see the content.
                When the content of the privacy policy is amended, such amendments will be posted on the site home page.
                </p>

                <h5 className="privacy_h4_sub_titlte">13-	Mandatory notification</h5>
                <p className="paragraph_privacy">When the content of the privacy policy is changed, KATIKA  informs its customers on its homepage at least 7 days before the amendment is made.
                </p>

                <h5 className="privacy_h4_sub_titlte">14-	Obligation to validate this confidentiality policy</h5>
                <p className="paragraph_privacy">Customers or users of the KATIKA <span className="Ocolor">(www.Katika.io) </span> website must validate the acceptance of this privacy policy before any registration of their personal data on the site.
                </p>

                <h5 className="privacy_h4_sub_titlte">15-	Contact KATIKA</h5>
                <p className="paragraph_privacy">In case of misunderstanding or difficulties encountered by a customer or a user of the website of KATIKA <span className="Ocolor">(www.Katika.io)</span> , the latter must contact the management of KATIKA by registered letter with acknowledgement of receipt or by electronic means.
                </p>

                
                <div className="px-2 py-5 privacy__button">                      
                 <button className="btn-custom-contained btn-primary  my-2" onClick={onDownloadClick}>
                   Download This Private Policy
                 </button>
                </div>    
              
            </Row>          
            </Container>
        </section>


    </Styles>
  );
}

const Styles = styled.div`
  font-family: poppins, mirza, sans-serif;
  .section1 {
    background-color: #fcf3ff;
  }
  .section2 {
    background-color: #faf8ff;
  }
`;

