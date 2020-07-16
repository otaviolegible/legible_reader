import React from 'react'
import { Container, H1, H2, H3, H4, Link, P} from '@legible/ui-components'

import { Footer, Header } from '../components'

const BookEdit = () => {
  return (
    <>
      <Header />
      <Container maxWidth="68.5rem" margin="6.4rem auto 12rem">
        <H1 className="mb-6">General Terms of Use</H1>
        <H4 className="mb-4"><strong>As of June 22nd, 2020</strong></H4>
        <P className="mb-4">Legible is a digital reading and publishing platform, available either via the Legible website or the Legible app (the “Platform”) and is shared by a diverse community of authors, publishers and other organizations that produce content (collectively, “Publishing Organizations”) and readers and viewers who enjoy that content (collectively, “Members”). All communities have standards, and Legible is no exception. The Legible Platform is a place where all members can expect to enjoy digital content in an open, inviting, comfortable and safe environment.</P>
        <P className="mb-4">PLEASE READ THE FOLLOWING TERMS OF USE CAREFULLY.  BY REGISTERING FOR, ACCESSING, BROWSING, POSTING, UPLOADING, DOWNLOADING FROM, REGISTERING AN ACCOUNT, SUBSCRIBING TO, OR OTHERWISE USING LEGIBLE OR ITS PLATFORM,  YOU ACKNOWLEDGE THAT YOU UNDERSTAND AND ACCEPT ALL THE PROVISIONS OF THESE GENERAL TERMS OF USE.  YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND YOURSELF TO THESE TERMS OF USE AND THAT YOU OR THE ORGANIZATION YOU REPRESENT INTEND TO BE LEGALLY BOUND BY THESE TERMS.  IF YOU DO NOT AGREE WITH THESE STATEMENTS OR THE TERMS AND CONDITIONS SET OUT BELOW, YOU CANNOT PROCEED ON THE LEGIBLE PLATFORM AND YOU MAY NOT ACCESS ANY CONTENT.</P>
        <P className="mb-4">By continuing to use the Legible Platform, you or the organization you represent (“You”) agree to be bound by the General Terms of Use set out below and the policies, terms and conditions which are incorporated by reference.</P>
        
        <H2 className="mt-6 mb-4" weight="regular">Eligibility</H2>
        <P className="mb-4">To be eligible to be a Member, or to use the Platform, or to create a Legible account (“Account”), You must meet all of the following criteria:</P>
        <ul className="mb-4">
          <li>- You must be thirteen (13) years of age to access content</li>
          <li>- You must be eighteen (18) years of age to upload content</li>
          <li>- If You are acting on behalf of an organization, You must be an authorized representative of the organization with the authority to bind the organization to these terms and conditions</li>
          <li>- You must comply with all Legible policies, terms and conditions, whether set out in this policy or otherwise available at [insert website]</li> 
          <li>- You must comply with all applicable laws at all times</li>
        </ul>
        <P className="mb-4">Your Account must remain in good standing.  You are responsible for the security of Your Account. You are responsible for the activity and the content within Your Account.  If You have reason to believe Your Account is no longer secure, please notify Legible immediately at <Link href="mailto:support@legible.com">support@legible.com</Link>.  Legible reserves the right to remove, delete or suspend any Account at any time, in its sole discretion and without noticed, including, without limitation, for any non-payment of fees or for any violation of these General Terms of Use or any other Legible policy, term or condition.</P>

        <H2 className="mt-6 mb-4" weight="regular">Additional Terms Incorporated by Reference</H2>
        {/* TO DO: Add link once available */}
        <P className="mb-4">In addition to the General Terms of Use set out herein, the following Legible policies and terms are expressly incorporated by reference into this Agreement:  Privacy Policy, Prohibited Activity and Content and Member Agreement.  These policies and terms and conditions, together with any new or additional policies, terms and conditions, may be amended and updated by Legible from time to time, in its sole discretion and without notice, by posting them on its website at [identify page].  By continuing to use the Platform, You acknowledge and agree to the current versions of these policies, terms and conditions.</P>

        <H2 className="mt-6 mb-4" weight="regular">Privacy</H2>
        {/* TO DO: Add link once available */}
        <P className="mb-4">Your privacy is important to us.  Our Privacy Policy outlines how we collect, use, disclose and protect Your personal information and is available [here].</P>

        <H2 className="mt-6 mb-4" weight="regular">Individual Terms and Conditions</H2>
        <P className="mb-4">When using the Platform, You may be subject to additional terms and conditions.  Examples include free Subscriptions and promo codes.  These individual terms and conditions are incorporated by reference into these General Terms of Use.</P>

        <H2 className="mt-6 mb-4" weight="regular">Members; Subscriptions; Purchases</H2>
        {/* TO DO: Add link once available */}
        <P className="mb-4">Legible offers access to eBooks, audiobooks, articles, videos and other content from participating Participating Organizations (collectively, “Content”), either (a) by a subscription (“Subscription”) for unlimited access to specific Content for a set period of time (generally, a month) (the “Subscription Period”) or (b) for specific Content which You purchase. The various types of Subscriptions and the different ways in which You may access Content on the Platform are available [here].  If You wish to subscribe to or otherwise have access to the Platform, the terms of Your relationship with Legible are available [here] in the Member Agreement.</P>

        <H2 className="mt-6 mb-4" weight="regular">Publishing Organizations</H2>
        {/* TO DO: Add link once available */}
        <P className="mb-4">If You wish to upload or publish Content on the Platform, the terms of Your relationship with Legible are available [here] in the Publishing Agreement.</P>

        <H2 className="mt-6 mb-4" weight="regular">Prohibited Activity</H2>
        {/* TO DO: Add link once available */}
        <P className="mb-4">Legible wishes to create a community where all Members can expect to enjoy Content in an open, inviting, comfortable and safe environment.  All Members, including You, must comply with the Policy Against Prohibited Activity and Content, which is available [here].</P>

        <H2 className="mt-6 mb-4" weight="regular">Member Indemnification Obligation</H2>
        <P className="mb-4">To the fullest extent of the law, You agree to indemnify, defend and hold Legible, its officers, directors, employees and affiliates harmless from and against all losses, claims damage or action arising from any breach of Your use or misuse of the Platform, any violation by You of these General Terms of Service or any other Legible policy or term or condition, or any of Your representations, warranties and obligations set forth in herein and therein.</P>

        <H2 className="mt-6 mb-4" weight="regular">Legible’s Rights</H2>
        {/* TO DO: Add link once available */}
        <P className="mb-4">Legible shall have sole control over all features and functionality of the Platform and the terms of the various types of Subscriptions.  Legible reserves the right to modify these General Terms of Use and any other policy, terms or conditions incorporated by reference herein, at any time in its sole discretion and without notice; provided, however, that You will be provided with prior notice of any changes that materially affect Your rights and obligations.  In addition, a current version of these General Terms of Use or the applicable policy, term or condition will be posted [insert page] and will indicate the effective date of the change.  Your continued use of the Legible Platform after the posting of such changes constitutes Your binding acceptance of such changes.  Legible may change or discontinue all or any part of the Platform and the Content, at any time and without notice, at its sole discretion.</P>

        <H2 className="mt-6 mb-4" weight="regular">Links; Third-Party Sites, Products and Services</H2>
        <P className="mb-4">The Legible Platform may include links to third party web sites and references to third party products and services solely as a convenience to its Members.  Legible does not endorse, and in fact, specifically disclaims any such third party sites, products or services (collectively, “Third Party Links”) and the information, perspectives, opinions, videos, images, materials, claims, products or services contained at or accessible through these Third Party Links.  You may proceed to these Third Party Links at your own risk.  Legible specifically disclaims any representations or warranties of any kind with respect to these Third Party Links and is not liable for any damages incurred by You as a result of these Third Party Links.</P>

        <H2 className="mt-6 mb-4" weight="regular">Cancellation of Subscription or Account</H2>
        <P className="mb-4">You may cancel Your Subscription or Your Account at any time through Your Account or by providing Legible with email notification of cancellation at <Link href="mailto:support@legible.com">support@legible.com</Link>.  Please refer to the Publishing Agreement or the Member Agreement, as applicable, for further details on cancelling Your Subscription or Your Account with Legible.</P>

        <H2 className="mt-6 mb-4" weight="regular">Intellectual Property and Other Propriety Rights</H2>
        <P className="mb-4">All elements of the Platform, including, without limitation, all design, information, computer code, products, services and graphics (“Propriety Information”) belong solely to Legible and its licensors.  All Proprietary Information is protected by copyright, trade dress, patent and trademark law and all other relevant intellectual property and other proprietary rights.</P>

        <H2 className="mt-6 mb-4" weight="regular">Reservation of Rights</H2>
        <P className="mb-4">Legible reserves all rights not expressly granted in these General Terms of Use.</P>

        <H2 className="mt-6 mb-4" weight="regular">Disclaimers</H2>
        <H3 className="mb-4">No Warranties</H3>
        <P className="mb-4">NOTWITHSTANDING ANYTHING ELSE IN THESE GENERAL TERMS OF USE OR ANY OTHER LEGIBLE POLICY, TERM OR CONDITION, AND TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, LEGIBLE DISCLAIMS ALL WARRANTIES, STATUTORY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ANY CLAIMS FOR ACCESSIBILITY, RELIABILITY, SECURITY AND  AVAILABILITY, THAT THE PLATFORM IS OR WILL BE ERROR FREE OR VIRUS FREE, AND ANY CLAIMS OF NON-INFRINGEMENT OF PROPRIETARY RIGHTS.  NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM LEGIBLE OR THROUGH THE PLATFORM WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.</P>

        <H3 className="mb-4">Exclusions</H3>
        <P className="mb-4">NOTWITHSTANDING ANYTHING ELSE IN THESE GENERAL TERMS OF USE OR ANY OTHER LEGIBLE POLICY, TERM OR CONDITION, AND TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, UNDER NO CIRCUMSTANCES WILL LEGIBLE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, RELIANCE, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO THE LEGIBLE PLATFORM, THESE GENERAL TERMS OF USE OR ANY OTHER LEGIBLE POLICY, TERM OR CONDITIONS OR ANY CONTENT AVAILABLE ON THE PLATFORM, WHETHER ARISING IN NEGLIGENCE, TORT, STATUTE, EQUITY, CONTRACT, COMMON LAW OR ANY OTHER CAUSE OF ACTION OR LEGAL THEORY, EVEN IF LEGIBLE HAS BEEN ADVISED OF THE POSSIBILITY OF THOSE DAMAGES.</P>

        <H3 className="mb-4">Limitation of Liability</H3>
        <P className="mb-4">NOTWITHSTANDING ANYTHING ELSE IN THESE GENERAL TERMS OF USE OR ANY OTHER LEGIBLE POLICY, TERM OR CONDITION, AND TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, IN NO EVENT WILL LEGIBLE’S TOTAL CUMULATIVE LIABILITY FOR DAMAGES, EXPENSES, COSTS AND LOSSES ARISING OUT OF YOUR USE OF THE PLATFORM OR YOUR SUBSCRIPTION EXCEED THE AGGREGATE AMOUNT PAID BY Y OU IN THE SIX MONTHS IMMEDIATELY PRIOR TO THE EVENTS GIVING RISE TO SUCH CLAIM FOR DAMAGES.</P>

        <H2 className="mt-6 mb-4" weight="regular">Miscellaneous</H2>
        <P className="mb-4">The failure of Legible to exercise or enforce any right or provision of these General Terms of Use will not constitute a waiver of such right or provision.  Any waiver of any provision of these Terms will be effective only if in writing and signed by Legible.  If any provision of these General Terms of Use or any other Legible policy, term or condition is held to be unlawful, void, or for any reason unenforceable, then that provision will be limited or eliminated from such terms to the minimum extent necessary and will not affect the validity and enforceability of any remaining provisions.  These General Terms of Use may not be transferred or assigned by You.  Upon termination of your Account or Subscription, any provision which by its nature or express terms should survive such termination, will survive such termination.</P>

        <H2 className="mt-6 mb-4" weight="regular">Entire Agreement</H2>
        <P className="mb-4">These General Terms of Use, including all policies, terms and conditions incorporated herein, constitute the entire agreement between You and Legible relating to the access and use of the Platform.</P>

        <H2 className="mt-6 mb-4" weight="regular">Agreement Amendment</H2>
        {/* TO DO: Add link once available */}
        <P className="mb-4">Legible reserves the right to update and change these General Terms of Use, including all policies, terms and conditions incorporated herein, from time to time.  You will be provided with notice of such changes which materially affects Your rights and obligations.  In addition, the current version of these General Terms of Use, including all policies, terms and conditions incorporated herein, will be posted [insert page] and will indicate the effective date of the change.  By continuing to use the Platform, You acknowledge and agree to the current versions of these policies, terms and conditions.</P>

        <H2 className="mt-6 mb-4" weight="regular">Applicable Law</H2>
        <P className="mb-4">Legible is owned and operated in Canada and all other countries by <strong>Legible Media Inc.</strong>, a corporation pursuant to the laws of the Province of British Columbia and the federal laws of Canada applicable therein.  Regardless of the place of execution or performance or the domicile of the Member, these General Terms of Use, including all policies, terms and conditions incorporated herein, are governed by and construed in accordance with the laws of the Province of British Columbia and the Canadian federal laws applicable therein and the Member agrees to irrevocable attorn to the non-exclusive jurisdiction of the courts of the Province of British Columbia and the venue of Vancouver.</P>
      </Container>
      <Footer />
    </>
  )
}

export default BookEdit