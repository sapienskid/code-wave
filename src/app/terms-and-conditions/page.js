import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions | Infinity CodeWave",
  description: "Terms and Conditions for Infinity CodeWave hackathon participants. Please read carefully before registering.",
};

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-[#0a0510] text-[#E6E1F0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0510]/90 backdrop-blur-md border-b border-[#E6E1F0]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-[#8976FB]">Infinity</span> CodeWave
          </Link>
          <Link
            href="/"
            className="px-6 py-2 bg-[#8976FB] text-white text-sm font-bold rounded-sm hover:bg-[#8976FB]/90 transition-all hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#8976FB]">
              Terms & Conditions
            </h1>
            <p className="text-lg opacity-60">
              Infinity CodeWave Hackathon — April 25-26, 2026
            </p>
          </div>

          {/* Last Updated */}
          <div className="mb-8 p-4 bg-[#8976FB]/10 border border-[#8976FB]/30 rounded-sm">
            <p className="text-sm opacity-80">
              <strong>Last Updated:</strong> February 14, 2026
            </p>
            <p className="text-sm opacity-80 mt-2">
              By registering for and participating in Infinity CodeWave, you agree to abide by these Terms and Conditions in their entirety.
            </p>
          </div>

          {/* Section 1: Eligibility */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">1. Eligibility & Registration</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>1.1 Participant Status:</strong> Infinity CodeWave is open to all students currently enrolled in high school, undergraduate, or graduate programs. Participants must present a valid student ID during check-in.
              </p>
              <p>
                <strong>1.2 Team Formation:</strong> Participants may compete individually or in teams of up to 4 members. Team formation can occur prior to the event or during designated team formation sessions at the hackathon.
              </p>
              <p>
                <strong>1.3 Registration Accuracy:</strong> All information provided during registration must be accurate and complete. KUMSC reserves the right to disqualify participants who provide false information.
              </p>
              <p>
                <strong>1.4 Admission:</strong> Registration does not guarantee admission. Due to venue capacity constraints (120 participants), admission is on a first-come, first-served basis or based on application review.
              </p>
            </div>
          </section>

          {/* Section 2: Code of Conduct */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">2. Code of Conduct</h2>
            
            <div className="mb-6 p-6 bg-[#8976FB]/5 border-l-4 border-[#8976FB]">
              <h3 className="text-xl font-semibold mb-3">2.1 Kathmandu University Code of Conduct</h3>
              <p className="opacity-80 mb-4">
                All participants must abide by the <strong>Code of Conduct of Kathmandu University</strong>. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-80 ml-4">
                <li><strong>Respect for University Property:</strong> Treat all university facilities, equipment, and resources with care. Any damage caused by negligence will be the financial responsibility of the participant.</li>
                <li><strong>Academic Integrity:</strong> Maintain the highest standards of honesty and integrity. Plagiarism, cheating, or misrepresentation is strictly prohibited.</li>
                <li><strong>Respectful Behavior:</strong> Show respect toward fellow participants, organizers, mentors, volunteers, and university staff at all times.</li>
                <li><strong>Non-Discrimination:</strong> Kathmandu University promotes an inclusive environment. Discrimination, harassment, or bullying based on race, gender, religion, nationality, disability, or any other protected characteristic will not be tolerated.</li>
                <li><strong>Compliance with University Policies:</strong> Follow all university policies regarding safety, security, and conduct while on campus.</li>
                <li><strong>Alcohol and Substances:</strong> The possession, use, or distribution of alcohol, illegal drugs, or controlled substances is strictly prohibited on university premises.</li>
                <li><strong>Quiet Hours:</strong> Respect designated quiet hours and areas within the university premises.</li>
              </ul>
            </div>

            <div className="mb-6 p-6 bg-[#8976FB]/5 border-l-4 border-[#8976FB]">
              <h3 className="text-xl font-semibold mb-3">2.2 Hackathon Code of Conduct</h3>
              <p className="opacity-80">
                All participants must adhere to the following hackathon-specific code of conduct:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-80 ml-4 mt-3">
                <li>Treat everyone with respect and create a welcoming, inclusive environment for all participants</li>
                <li>Report any harassment, discrimination, or violations to hackathon staff immediately</li>
                <li>Do not engage in harassment, trolling, intimidation, or any form of bullying</li>
                <li>Follow all competition rules, submission guidelines, and judging criteria</li>
                <li>Respect intellectual property rights and give credit where due</li>
                <li>Maintain a positive and collaborative attitude throughout the event</li>
              </ul>
            </div>

            <div className="space-y-4 opacity-80">
              <p>
                <strong>2.3 Violations:</strong> Any violation of the Kathmandu University Code of Conduct or Hackathon Code of Conduct may result in immediate disqualification, removal from the premises, and potential reporting to university authorities or law enforcement where applicable.
              </p>
            </div>
          </section>

          {/* Section 3: Hackathon Rules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">3. Hackathon Rules</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>3.1 Project Timeline:</strong> All coding and development work must begin at the official start time of the hackathon (April 25, 2026, 10:00 AM NST). Pre-written code, templates, and third-party libraries are allowed, but the core functionality of your project must be developed during the event.
              </p>
              <p>
                <strong>3.2 Original Work:</strong> Projects must be original work created during the hackathon. While you may use open-source libraries and APIs, the final submission must demonstrate substantial original development.
              </p>
              <p>
                <strong>3.3 Submission Requirements:</strong> All projects must be submitted through the designated platform before the deadline. Late submissions will not be accepted. Each team must submit:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Source code (via GitHub or similar repository)</li>
                <li>Working demo or prototype (where applicable)</li>
                <li>Project description and documentation</li>
                <li>List of team members and their roles</li>
              </ul>
              <p>
                <strong>3.4 Judging Criteria:</strong> Projects will be judged based on innovation, technical complexity, execution, presentation, and alignment with the chosen track theme.
              </p>
              <p>
                <strong>3.5 Track Selection:</strong> Teams must select one track (AI & Applied Mathematics, Secure & Smart Future, Math + Computing for Good, Next-Gen Tech & Quantum, or Open Innovation) for their project submission.
              </p>
            </div>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">4. Intellectual Property</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>4.1 Ownership:</strong> Participants retain full ownership of their intellectual property created during the hackathon. KUMSC does not claim any rights to your project code, design, or concepts.
              </p>
              <p>
                <strong>4.2 Licenses:</strong> By participating, you grant KUMSC and Infinity CodeWave sponsors a non-exclusive, royalty-free license to use your project for promotional purposes, including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Display on the Infinity CodeWave website and social media</li>
                <li>Inclusion in event highlights and recap videos</li>
                <li>Demonstration at future KUMSC events or promotional materials</li>
                <li>Reference in sponsor reports and communications</li>
              </ul>
              <p>
                <strong>4.3 Third-Party IP:</strong> Participants are responsible for ensuring their projects do not infringe upon third-party intellectual property rights, including patents, copyrights, and trademarks.
              </p>
              <p>
                <strong>4.4 Open Source:</strong> While not required, participants are encouraged to open-source their projects. If you choose to do so, please include an appropriate open-source license.
              </p>
            </div>
          </section>

          {/* Section 5: Prizes & Awards */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">5. Prizes & Awards</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>5.1 Prize Distribution:</strong> Winners will be announced during the closing ceremony. Prizes must be claimed within 30 days of the event or will be forfeited.
              </p>
              <p>
                <strong>5.2 Team Prizes:</strong> Prizes awarded to teams will be distributed equally among registered team members unless otherwise specified.
              </p>
              <p>
                <strong>5.3 Tax Responsibility:</strong> Winners are responsible for any taxes or fees associated with prize acceptance. KUMSC is not responsible for tax reporting or withholding.
              </p>
              <p>
                <strong>5.4 Sponsor Prizes:</strong> Specific sponsor prizes may have additional terms and conditions set by the respective sponsor.
              </p>
              <p>
                <strong>5.5 Disqualification:</strong> Teams found to be in violation of these Terms and Conditions will be disqualified and forfeit any prizes won.
              </p>
            </div>
          </section>

          {/* Section 6: Liability & Indemnification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">6. Liability & Indemnification</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>6.1 Assumption of Risk:</strong> Participation in Infinity CodeWave is at your own risk. KUMSC, Kathmandu University, event sponsors, and organizers are not responsible for any personal injury, property damage, loss, or theft that may occur during the event.
              </p>
              <p>
                <strong>6.2 Equipment Liability:</strong> Participants are responsible for their own equipment, including laptops, chargers, and personal belongings. KUMSC does not provide insurance coverage for personal property.
              </p>
              <p>
                <strong>6.3 Food Allergies:</strong> While we strive to accommodate dietary restrictions, participants with severe food allergies should exercise caution. KUMSC is not responsible for allergic reactions to provided meals.
              </p>
              <p>
                <strong>6.4 Indemnification:</strong> By participating, you agree to indemnify and hold harmless KUMSC, Kathmandu University, event sponsors, organizers, volunteers, and their representatives from any claims, damages, or expenses arising from your participation.
              </p>
            </div>
          </section>

          {/* Section 7: Photo & Media Release */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">7. Photo & Media Release</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>7.1 Consent:</strong> By attending Infinity CodeWave, you consent to being photographed, filmed, and recorded. These materials may be used for promotional, educational, and archival purposes without compensation.
              </p>
              <p>
                <strong>7.2 Opt-Out:</strong> If you do not wish to be photographed or recorded, please notify the registration desk upon check-in and wear the provided "No Photo" lanyard.
              </p>
            </div>
          </section>

          {/* Section 8: Cancellation & Changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">8. Cancellation & Changes</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>8.1 Event Cancellation:</strong> In the unlikely event that Infinity CodeWave is cancelled or postponed due to unforeseen circumstances (including but not limited to natural disasters, university closures, or public health emergencies), KUMSC will notify participants as soon as possible via email and social media.
              </p>
              <p>
                <strong>8.2 Schedule Changes:</strong> KUMSC reserves the right to modify the event schedule, rules, or judging criteria with reasonable notice to participants.
              </p>
              <p>
                <strong>8.3 Refunds:</strong> As Infinity CodeWave is a free event, no refunds are applicable. However, in the event of cancellation, every effort will be made to reschedule the event.
              </p>
            </div>
          </section>

          {/* Section 9: General Provisions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#8976FB]">9. General Provisions</h2>
            <div className="space-y-4 opacity-80">
              <p>
                <strong>9.1 Governing Law:</strong> These Terms and Conditions shall be governed by and construed in accordance with the laws of Nepal.
              </p>
              <p>
                <strong>9.2 Severability:</strong> If any provision of these Terms and Conditions is found to be unenforceable, the remaining provisions shall remain in full effect.
              </p>
              <p>
                <strong>9.3 Entire Agreement:</strong> These Terms and Conditions constitute the entire agreement between participants and KUMSC regarding the hackathon.
              </p>
              <p>
                <strong>9.4 Contact:</strong> For questions regarding these Terms and Conditions, please contact us at <a href="mailto:mathsclub@ku.edu.np" className="text-[#8976FB] hover:underline">mathsclub@ku.edu.np</a>.
              </p>
            </div>
          </section>

          {/* Agreement */}
          <div className="mt-12 p-6 bg-[#8976FB]/10 border-2 border-[#8976FB] rounded-sm text-center">
            <p className="text-lg font-semibold mb-2">
              By registering for Infinity CodeWave, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
            <p className="opacity-80">
              We look forward to seeing you at Kathmandu University for 24 hours of innovation!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-[#E6E1F0]/20 py-8 px-6 bg-[#0a0510]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-60">
            © 2026 Kathmandu University Mathematics Students' Club (KUMSC).
          </p>
          <p className="text-sm opacity-60 mt-2">
            <Link href="/" className="text-[#8976FB] hover:underline">Return to Homepage</Link>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default TermsAndConditions;
