import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import "./../Privacypolicy/Privacypolicy.scss"
import "./Userlicense.Scss"

const onDownloadClick = () => {
    // using Java Script method to get PDF file
    fetch('User_license_agrement.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'User_license_agrement.pdf';
            alink.click();
        })
    })
  }

export default function Userlicense() {
  return (
    <Styles className="mx-4">
      <section className="Userlicense_section1">
        <Container>
    <Row className="row-walletsection2_2">
       <h3 className="privacy_title">END USER LICENSE AGREEMENT</h3>    
       <p className="paragraph_privacy">LudoKin is licensed to You (End-User) by Katika SAS, located in Cameroon precisely in Douala at Akwa(Pharmacie des sapeurs) , (hereinafter: Licensor), for use only under the terms of this License Agreement.
        By downloading the Application from the Apple AppStore, or any other appstore,  thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement.
        The parties of this License Agreement acknowledge that Apple, or any other appstore is not a Party to this License Agreement and is not bound by any provisions or obligations with regard to the Application, such as warranty, liability, maintenance and support thereof. Katika SAS, not Apple or Play Store is solely responsible for the licensed Application and the content thereof.
        This License Agreement may not provide for usage rules for the Application that are in conflict with the latest <span className="Ocolor"> App Store Terms of Service, or Play Store Terms of Service.</span> Katika SAS  acknowledges that it had the opportunity to review said terms and this license Agreement is not conflicting with them.
        All rights not expressly granted to You are reserved.
        </p>       

        <h5 className="privacy_h4_sub_titlte">1.	THE APPLICATION</h5>
        <p className="paragraph_privacy">Ludokin (hereinafter: Application) is a play-to-earn social game that lets you play against your friends and people around the world. LUDO KIN uses the cryptocurrency KIN.
         KIN won through playing LudoKIN can be exchanged among other cryptocurrencies or for real money.
        </p> 
        
       <h5 className="privacy_h4_sub_titlte">2.	SCOPE OF LICENSE</h5>
       <div class="divcontainer">    
        <ul className="list_privatepolicy">
            <li  className="items_list">You are given a non-transferable, non-exclusive, non-sublicensable license to install and use the Licensed Application on any Apple-branded Products that You (End-User) own or control and as permitted by the Usage Rules set forth in this section and the App Store Terms of Service, with the exception that such licensed Application may be accessed and used by other accounts associated with You (End-User, The Purchaser) via Family Sharing or volume purchasing.</li>
            <li  className="items_list">This license will also govern any updates of the Application provided by Licensor that replace, repair, and/or supplement the first Application, unless a separate license is provided for such update in which case the terms of that new license will govern.</li> 
            <li  className="items_list">You may not share or make the Application available to third parties (unless to the degree allowed by the Apple Terms and Conditions, and with Katika SAS prior written consent), sell, rent, lend, lease or otherwise redistribute the Application.</li> 
            <li  className="items_list">You may not reverse engineer, translate, disassemble, integrate, decompile, integrate, remove, modify, combine, create derivative works or updates of, adapt, or attempt to derive the source code of the Application, or any part thereof (except with Katika SAS prior written consent).</li> 
            <li  className="items_list">You may not copy (excluding when expressly authorized by this license and the Usage Rules) or alter the Application or portions thereof. You may create and store copies only on devices that You own or control for backup keeping under the terms of this license, the App Store Terms of Service, and any other terms and conditions that apply to the device or software used. You may not remove any intellectual property notices. You acknowledge that no unauthorized third parties may gain access to these copies at any time.</li> 
            <li  className="items_list">Violations of the obligations mentioned above, as well as the attempt of such infringement, may be subject to prosecution and damages.</li> 
            <li  className="items_list">Licensor reserves the right to modify the terms and conditions of licensing.</li> 
            <li  className="items_list">Nothing in this license should be interpreted to restrict third-party terms. When using the Application, You must ensure that You comply with applicable third-party terms and conditions.</li> 
             
        </ul> 
        </div>

        <h5 className="privacy_h4_sub_titlte">3.	TECHNICAL REQUIREMENTS</h5>
        <h5 className="privacy_h4_sub_titlte">4.	MAINTENANCE AND SUPPORT</h5>
        
        <div class="divcontainer">    
        <ul className="list_privatepolicy">
            <li  className="items_list">	1.	The Licensor is solely responsible for providing any maintenance and support services for this licensed Application. You can reach the Licensor at the email address listed in the App Store Overview for this licensed Application.</li>
            <li  className="items_list">2.	Katika SAS and the End-User acknowledge that Apple and Google or any third party have no obligation whatsoever to furnish any maintenance and support services with respect to the licensed Application.</li> 
        </ul> 
        </div>
      
        <h5 className="privacy_h4_sub_titlte">5.	USE OF DATA</h5>
        <p className="paragraph_privacy">You acknowledge that Licensor will be able to access and adjust Your downloaded licensed Application content and Your personal information, and that Licensor's use of such material and information is subject to Your legal agreements with Licensor and Licensor's privacy policy.</p>  
           
       
        <h5 className="privacy_h4_sub_titlte">6.	LIABILITY</h5>
        <div class="divcontainer">    
        <ul className="list_privatepolicy">
            <li  className="items_list">1.	Licensor takes no accountability or responsibility for any damages caused due to a breach of duties according to Section 2 of this Agreement. To avoid data loss, You are required to make use of backup functions of the Application to the extent allowed by applicable third-party terms and conditions of use. You are aware that in case of alterations or manipulations of the Application, You will not have access to licensed Application.</li>
            <li  className="items_list">2.	Licensor takes no accountability and responsibility in case of the loss of Private Key to their KIN wallet. The user is required to take their own steps to ensure their Private Key is backed up by using the "Backup & Restore" functionality which is available inside the app.</li> 
        </ul> 
        </div>

        <h5 className="privacy_h4_sub_titlte">7.	WARRANTY</h5>
        <div class="divcontainer">    
        <ul className="list_privatepolicy">
            <li  className="items_list">Licensor warrants that the Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Application works as described in the user documentation.</li>
            <li  className="items_list">No warranty is provided for the Application that is not executable on the device, that has been unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of Katika SAS sphere of influence that affect the executability of the Application.</li> 
            <li  className="items_list">You are required to inspect the Application immediately after installing it and notify Katika about issues discovered without delay by email provided in Product Claims. The defect report will be taken into consideration and further investigated if it has been mailed within a period of 30 days after discovery.</li>              
            <li  className="items_list">If we confirm that the Application is defective, Katika SAS reserves a choice to remedy the situation either by means of solving the defect or substitute delivery.</li>
            <li  className="items_list">In the event of any failure of the Application to conform to any applicable warranty, You may notify the App-Store-Operator, and Your Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the App-Store-Operator will have no other warranty obligation whatsoever with respect to the App, and any other losses, claims, damages, liabilities, expenses and costs attributable to any negligence to adhere to any warranty.</li> 
            <li  className="items_list">If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve (12) months after the Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers.</li>              
       
        </ul> 
        </div>

        <h5 className="privacy_h4_sub_titlte">8.	PRODUCT CLAIMS</h5>
        <p className="paragraph_privacy">1.	Katika SAS and the End-User acknowledge that Katika SAS, and not Apple or Google, is responsible for addressing any claims of the End-User or any third party relating to the licensed Application or the End-User’s possession and/or use of that licensed Application, including, but not limited to:
        </p>  
        <div class="divcontainer">    
        <ul className="list_privatepolicy">
            <li  className="items_list">Product liability claims;</li>
            <li  className="items_list">Any claim that the licensed Application fails to conform to any applicable legal or regulatory requirement; and</li> 
            <li  className="items_list">Claims arising under consumer protection, privacy, or similar legislation, including in connection with Your Licensed Application’s use of the HealthKit and HomeKit.</li>              
          
        </ul> 
        </div>

        <h5 className="privacy_h4_sub_titlte">9.	LEGAL COMPLIANCE</h5>
        <p className="paragraph_privacy">You represent and warrant that You are not located in a country that is subject to Cameroon Government embargo, or that has been designated by the Cameroon Government as a "terrorist supporting" country; and that You are not listed on any Cameroon. Government list of prohibited or restricted parties.
        </p>
     
        <h5 className="privacy_h4_sub_titlte">10.	CONTACT INFORMATION</h5>
        <p className="paragraph_privacy">1.	For general inquiries, complaints, questions or claims concerning the licensed Application, please contact:</p>
        <div class="divcontainer">  
        <ul className="list_privatepolicy">
            <li className="items_list">Katika SAS</li>
            <li className="items_list">Akwa Rue Pau</li>             
            <li className="items_list">BP 11933 Douala</li>
            <li className="items_list">Cameroon</li> 
            <li className="items_list">LudoKin@katika.io</li>
        </ul> 
        </div>
        <h5 className="privacy_h4_sub_titlte">11.	TERMINATION</h5>
        <p className="paragraph_privacy">The license is valid until terminated by Katika SAS or by You. Your rights under this license will terminate automatically and without notice from Katika SAS  if You fail to adhere to any term(s) of this license. Upon License termination, You shall stop all use of the Application, and destroy all copies, full or partial, of the Application.</p>

       <h5 className="privacy_h4_sub_titlte">12.	THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY</h5>
        <p className="paragraph_privacy">Katika SAS represents and warrants that Katika SAS will comply with applicable third-party terms of agreement when using licensed Application.
        In Accordance with Section 9 of the "Instructions for Minimum Terms of Developer's End-User License Agreement," Apple and Apple's subsidiaries shall be third-party beneficiaries of this End User License Agreement and - upon Your acceptance of the terms and conditions of this license agreement, Apple or Google will have the right (and will be deemed to have accepted the right) to enforce this End User License Agreement against You as a third-party beneficiary thereof.

        </p>

        <h5 className="privacy_h4_sub_titlte">13.	INTELLECTUAL PROPERTY RIGHTS</h5>
        <p className="paragraph_privacy">Katika SAS and the End-User acknowledge that, in the event of any third-party claim that the licensed Application or the End-User's possession and use of that licensed Application infringes on the third party's intellectual property rights, Katika SAS, and not Apple, will be solely responsible for the investigation, defense, settlement and discharge or any such intellectual property infringement claims.</p>

        <h5 className="privacy_h4_sub_titlte">14.	APPLICABLE LAW</h5>
        <p className="paragraph_privacy">This license agreement is governed by the laws of the Republic Of Cameroon excluding its conflicts of law rules.
        </p>

        <h5 className="privacy_h4_sub_titlte">15.	MISCELLANEOUS</h5>
        <div class="divcontainer">  
        <ul className="list_privatepolicy">
            <li className="items_list">If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.</li>
            <li className="items_list">Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.</li>             
            <li className="items_list">USER CONDUCT In connection with your access to or use of the Service, you shall not: upload, post, email, transmit or otherwise make available any Content that: is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful or otherwise objectionable; may not be made available under any law or under contractual or fiduciary relationships (such as confidential or proprietary information learned as part of an employment relationship or under a non-disclosure agreement); infringes any patent, trademark, trade secret, copyright or other proprietary right of any party; consists of unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, commercial electronic messages or any other form of solicitation; or contains software viruses or any other code, files or programs designed to interrupt, destroy or limit the functionality of any software or hardware; impersonate any person or entity, including, but not limited to, Katika SAS  personnel, or falsely state or otherwise misrepresent your affiliation with any person or entity; forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Service; act in a manner that negatively affects the ability of other users to access or use the Service; take any action that imposes an unreasonable or disproportionately heavy load on the Service or its infrastructure; interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies or regulations of networks connected to the Service; exploit any bug, loophole or any other form of cheating for their own personal gain; use spiders, crawlers, robots or any other similar means to access the Service or substantially download, reproduce or archive any portion of the Service; sell, share, transfer, trade, loan or exploit for any commercial purpose any portion of the Service, including, but not limited to, your user account and password; or violate any applicable local, state, provincial, federal, national or international law or regulation. In the event that you violate the Terms of Use, all rights granted to you under the YOU shall be terminated immediately, with or without notice, and Katika SAS, in its sole discretion, may remove and discard Your Content. Katika SAS may suspend or terminate your account at its sole discretion. You agree to notify Katika SAS immediately
             of any unauthorized use of your account or password or any other similar breach of security.</li>
        </ul> 
        </div>
        
        <div className="px-2 py-5 privacy__button">                      
         <button className="btn-custom-contained btn-primary  my-2" onClick={onDownloadClick}>
           Download this user license agrement
         </button>
        </div>    
      
    </Row>          

        </Container>

      </section>

    </Styles>)
    }    

const Styles = styled.div`
font-family: poppins, mirza, sans-serif;
.Userlicense_section1 {
  background-color: #ffffff;
}
.Userlicense_section1 {
  background-color: #ffffff;
}
`;
