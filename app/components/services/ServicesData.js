import {
  FaPodcast,
  FaVideo,
  FaRegCheckCircle,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiRemoteControlLine } from "react-icons/ri";

const ServicesData = [
  {
    slug: "company-formation",
    title: "Company Formation",
    text: "Complete business setup and registration services across GCC countries including legal structuring and licensing.",
    image: "/services/formation (2).jpg",
    desc: (
      <div className="space-y-8 text-[#1C1C1C] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3">
          Company Formation: Your Gateway to Business in the GCC
        </h1>

        <p>
          Establishing your business in the Gulf Cooperation Council (GCC)
          region requires navigating complex regulatory frameworks and
          understanding local business practices. Our comprehensive company
          formation services ensure your business is properly structured,
          legally compliant, and positioned for success from day one.
        </p>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Why Proper Company Formation Matters
        </h2>
        <p>
          Choosing the right business structure impacts your liability,
          taxation, expansion capabilities, and ability to attract investors.
          Each GCC country has specific requirements for foreign ownership,
          minimum capital, and permitted activities that must be carefully
          considered.
        </p>

        <img
          src="/services/formation (1).jpg"
          alt="Business licenses and documents"
          className="w-full md:h-[300px]  mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Our Comprehensive Formation Process
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Business Structure Consultation:</strong> Determining the
            optimal legal entity for your goals
          </li>
          <li>
            <strong>Name Reservation & Approval:</strong> Ensuring your business
            name complies with local regulations
          </li>
          <li>
            <strong>Document Preparation:</strong> Drafting MOA, AOA, and other
            required incorporation documents
          </li>
          <li>
            <strong>License Acquisition:</strong> Securing all necessary
            commercial and professional licenses
          </li>
          <li>
            <strong>Bank Account Assistance:</strong> Facilitating corporate
            bank account opening
          </li>
          <li>
            <strong>Post-Incorporation Support:</strong> VAT registration,
            immigration card processing, and more
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          GCC Country Specializations
        </h2>
        <p>
          We have extensive experience establishing businesses across Saudi
          Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain. Each country offers
          unique opportunities and has specific requirements that we navigate
          efficiently on your behalf.
        </p>

        <img
          src="/services/formation.jpg"
          alt="GCC countries business opportunities"
          className="w-full md:h-[300px]   mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          From Concept to Operational Reality
        </h2>
        <p>
          Our end-to-end company formation service transforms your business idea
          into a legally compliant entity ready for operation. We handle the
          complexities while you focus on developing your products, services,
          and market strategy.
        </p>
        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Consider free zone establishments if you
          need 100% foreign ownership, or mainland companies for direct market
          access—each has distinct advantages we can help you evaluate.
        </p>
      </div>
    ),
  },

  {
    slug: "pro-government-services",
    title: "PRO & Government Services",
    text: "Professional liaison with government departments, documentation processing, and regulatory compliance across GCC nations.",
    image: "/services/service.jpg",
    desc: (
      <div className="space-y-8 text-[#1C1B2A] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3">
          PRO & Government Services: Navigating Bureaucracy with Expertise
        </h1>

        <p>
          Government liaison services are essential for businesses operating in
          the GCC region. Our Professional Relations Officers (PROs) serve as
          your dedicated representatives, handling all interactions with
          government departments, ministries, and regulatory authorities to
          ensure compliance and smooth operations.
        </p>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Why PRO Services Are Essential
        </h2>
        <p>
          Navigating government procedures in GCC countries can be
          time-consuming and complex due to language barriers, changing
          regulations, and procedural requirements. Our PRO services save you
          valuable time and ensure all submissions are completed correctly the
          first time.
        </p>

        <img
          src="/services/services (1).jpg"
          alt="Document processing and verification"
          className="w-full md:h-[300px]   mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Comprehensive PRO Service Offerings
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Document Processing:</strong> Submission and follow-up on
            all government applications
          </li>
          <li>
            <strong>License Renewals:</strong> Timely renewal of trade licenses
            and permits
          </li>
          <li>
            <strong>Labor Ministry Services:</strong> Work permit processing,
            labor card applications, and quota requests
          </li>
          <li>
            <strong>Immigration Services:</strong> Visa processing, entry
            permits, and status adjustments
          </li>
          <li>
            <strong>Municipality Liaison:</strong> Health cards, signage
            approvals, and municipal permits
          </li>
          <li>
            <strong>Chamber of Commerce:</strong> Registration, certificate
            attestation, and documentation
          </li>
          <li>
            <strong>Ministry-Specific Requirements:</strong> Industry-specific
            regulatory compliance
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">Real-World Impact</h2>
        <p>
          A construction company avoided project delays worth millions by
          utilizing our PRO services to expedite permit approvals and ensure all
          regulatory requirements were met before deadline approaches.
        </p>

        <img
          src="/services/services (2).jpg"
          alt="Efficient government processing"
          className="w-full md:h-[300px]   mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Your Bridge to Regulatory Compliance
        </h2>
        <p>
          Our PRO services act as an extension of your team, ensuring that all
          government interactions are handled professionally, efficiently, and
          in compliance with local regulations. We maintain relationships with
          key officials and stay updated on procedural changes to serve your
          business best.
        </p>
        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Establish a dedicated PRO relationship
          early—it helps build credibility with government departments and often
          leads to faster processing times for your applications.
        </p>
      </div>
    ),
  },

  {
    slug: "visa-licensing",
    title: "Visa & Licensing",
    text: "Comprehensive visa processing, immigration services, and business licensing solutions for GCC countries.",
    image: "/services/visa.jpg",
    desc: (
      <div className="space-y-8 text-[#1C1C1C] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3">
          Visa & Licensing: Streamlined Immigration and Business Authorization
          Solutions
        </h1>

        <p>
          Navigating the complex landscape of immigration and business licensing
          in the GCC region requires specialized knowledge and experience. Our
          comprehensive visa and licensing services ensure your business remains
          compliant while facilitating smooth entry and stay for your team
          members.
        </p>

        <img
          src="/services/visa (1).jpg"
          alt="Visa and immigration process"
          className="w-full md:h-[300px]  mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          The Importance of Proper Visa & Licensing
        </h2>
        <p>
          Immigration regulations in GCC countries change frequently, and
          non-compliance can result in significant penalties, project delays, or
          even business closure. Proper licensing ensures your business
          activities are legally authorized and aligned with local regulations.
        </p>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Our Visa & Licensing Services
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Employment Visas:</strong> Processing for executives,
            managers, and staff
          </li>
          <li>
            <strong>Investor Visas:</strong> Solutions for business owners and
            partners
          </li>
          <li>
            <strong>Family Sponsorship:</strong> Residence visas for family
            members
          </li>
          <li>
            <strong>License Applications:</strong> Trade, professional, and
            specialized licenses
          </li>
          <li>
            <strong>Renewals & Amendments:</strong> Timely processing of
            renewals and modifications
          </li>
          <li>
            <strong>Status Change Services:</strong> Visa transfer and
            cancellation procedures
          </li>
          <li>
            <strong>Medical & Fitness:</strong> Coordination of required medical
            testing
          </li>
          <li>
            <strong>Emirates ID & Labor Cards:</strong> Application and
            processing
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Country-Specific Expertise
        </h2>
        <p>
          Each GCC country has unique visa and licensing requirements. Our team
          has specialized knowledge of Saudi Arabia's Qiwa system, UAE's Tasheel
          and Amer centers, Qatar's METRA, Oman's Siyar, and other national
          systems.
        </p>

        <img
          src="/services/visa (2).jpg"
          alt="GCC country specific requirements"
          className="w-full md:h-[300px]  mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Ensuring Compliance and Efficiency
        </h2>
        <p>
          We maintain ongoing tracking systems to ensure visa and license
          renewals are processed before expiration dates, avoiding penalties and
          business interruptions. Our digital monitoring system provides timely
          alerts and status updates for all your immigration and licensing
          needs.
        </p>
        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Begin visa processing at least 4-6 weeks
          before intended travel dates to account for processing times, document
          authentication, and potential delays during peak seasons.
        </p>
      </div>
    ),
  },

  {
    slug: "business-strategy",
    title: "Business Strategy",
    text: "Strategic planning, market analysis, and growth strategy development for sustainable business success.",
    image: "/services/startup (1).jpg",
    desc: (
      <div className="space-y-8 text-[#1C1C1C] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3">
          Business Strategy: Charting Your Path to Sustainable Growth
        </h1>

        <p>
          In today's competitive GCC market, a well-defined business strategy is
          not optional—it's essential for survival and growth. Our strategic
          consulting services help you navigate market complexities, identify
          opportunities, and create actionable plans that deliver measurable
          results.
        </p>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          The Power of Strategic Planning
        </h2>
        <p>
          Businesses with clear strategies grow 30% faster and are 12% more
          profitable than those without formal planning. Strategic clarity
          aligns your team, optimizes resource allocation, and positions your
          company to capitalize on emerging opportunities in the dynamic GCC
          market.
        </p>

        <img
          src="/services/startup (2).jpg"
          alt="Market analysis and research"
          className="w-full md:h-[300px]  mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Our Strategic Service Offerings
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Market Entry Strategy:</strong> Comprehensive analysis for
            successful regional expansion
          </li>
          <li>
            <strong>Competitive Positioning:</strong> Differentiation strategies
            in crowded markets
          </li>
          <li>
            <strong>Growth Strategy:</strong> Scalable models for sustainable
            expansion
          </li>
          <li>
            <strong>Digital Transformation:</strong> Integrating technology into
            business models
          </li>
          <li>
            <strong>Operational Excellence:</strong> Streamlining processes for
            efficiency
          </li>
          <li>
            <strong>Strategic Financial Planning:</strong> Aligning financial
            resources with business goals
          </li>
          <li>
            <strong>Risk Management:</strong> Identifying and mitigating
            business risks
          </li>
          <li>
            <strong>Performance Metrics:</strong> Developing KPIs to track
            strategic implementation
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          GCC Market Specialization
        </h2>
        <p>
          Our strategies are specifically tailored to the unique characteristics
          of GCC markets, considering cultural nuances, regulatory environments,
          economic visions (Saudi Vision 2030, UAE Centennial 2071, etc.), and
          evolving consumer behaviors across the region.
        </p>

        <img
          src="/services/animation (4).jpg"
          alt="Strategy implementation and execution"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          From Vision to Execution
        </h2>
        <p>
          We don't just deliver strategy documents—we partner with you through
          implementation, providing ongoing support, adjustment recommendations,
          and performance monitoring to ensure your strategic objectives are
          achieved.
        </p>
        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Revisit your business strategy quarterly
          rather than annually in fast-changing markets like the GCC to remain
          agile and responsive to new opportunities and challenges.
        </p>
      </div>
    ),
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    text: "Comprehensive digital marketing strategies, social media management, and online presence optimization.",
    image: "/services/digital (2).jpg",
    desc: (
      <div className="space-y-8 text-[#1C1C1C] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3">
          Digital Marketing: Connecting Your Business with GCC Audiences
        </h1>

        <p>
          With the GCC's internet penetration exceeding 95% and social media
          usage among the highest globally, digital marketing is no longer
          optional—it's essential for business growth. Our data-driven digital
          marketing strategies connect you with your target audience across the
          region, driving engagement, leads, and conversions.
        </p>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          The Digital Imperative in GCC Markets
        </h2>
        <p>
          GCC consumers are digitally savvy, with mobile-first behaviors and
          high expectations for personalized online experiences. Businesses that
          effectively leverage digital channels see 2.8x higher revenue growth
          compared to those with limited digital presence.
        </p>

        <img
          src="/services/digital (1).jpg"
          alt="Digital marketing channels"
          className="w-full md:h-[300px]  mx-auto rounded-lg shadow-md"
        />
        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Our Digital Marketing Services
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Search Engine Optimization (SEO):</strong> Increasing
            organic visibility in GCC search results
          </li>
          <li>
            <strong>Search Engine Marketing (SEM):</strong> Targeted paid
            advertising campaigns
          </li>
          <li>
            <strong>Social Media Marketing:</strong> Platform-specific
            strategies for Facebook, Instagram, LinkedIn, Twitter, and Snapchat
          </li>
          <li>
            <strong>Content Marketing:</strong> Arabic and English content
            creation tailored to GCC audiences
          </li>
          <li>
            <strong>Email Marketing:</strong> Personalized nurturing campaigns
            with high open rates
          </li>
          <li>
            <strong>Marketing Automation:</strong> Streamlined customer journey
            management
          </li>
          <li>
            <strong>Analytics & Reporting:</strong> Data-driven insights and
            performance measurement
          </li>
          <li>
            <strong>Conversion Rate Optimization:</strong> Maximizing ROI from
            website traffic
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          GCC Digital Landscape Expertise
        </h2>
        <p>
          We understand the unique digital behaviors across GCC countries—from
          the high Instagram usage in Kuwait and UAE to the Twitter dominance in
          Saudi Arabia and the emerging TikTok trends in Qatar and Oman. Our
          strategies are culturally nuanced and platform-optimized.
        </p>

        <img
          src="/services/services (3).jpg"
          alt="Digital marketing strategy planning"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Measurable Results and ROI
        </h2>
        <p>
          We focus on campaigns that deliver measurable business outcomes, not
          just vanity metrics. Our clients average a 3.5x return on digital
          marketing investment through carefully optimized strategies tailored
          to GCC market dynamics.
        </p>
        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Invest in Arabic-language content—GCC
          consumers strongly prefer content in their native language, with
          Arabic campaigns achieving 4-5x higher engagement rates than
          English-only content.
        </p>
      </div>
    ),
  },

  {
    slug: "website-app-development",
    title: "Website & App Development (by Nerou)",
    text: "Custom web and mobile application development tailored to your business needs and target audience.",
    image: "/services/app (1).jpg",
    desc: (
      <div className="space-y-8 text-[#1C1C1C] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3">
          Website & App Development: Digital Experiences That Drive Business
          Growth
        </h1>

        <p>
          In the digital age, your website and applications are often the first
          interaction customers have with your brand. Nerou's development team
          creates responsive, user-friendly, and conversion-optimized digital
          experiences that reflect your brand excellence while meeting the
          technical expectations of GCC audiences.
        </p>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Why Digital Experience Matters in GCC Markets
        </h2>
        <p>
          GCC consumers have among the highest expectations for digital
          experiences globally, with 73% abandoning websites that don't load
          within 3 seconds. A professionally developed digital presence builds
          trust, enhances brand perception, and directly impacts conversion
          rates.
        </p>

        <img
          src="/services/app (2).jpg"
          alt="Digital marketing strategy planning"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Our Development Services
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Responsive Website Development:</strong> Mobile-first
            designs that perform across all devices
          </li>
          <li>
            <strong>E-Commerce Solutions:</strong> Secure online stores
            optimized for GCC payment preferences
          </li>
          <li>
            <strong>Custom Web Applications:</strong> Tailored business
            solutions and customer portals
          </li>
          <li>
            <strong>Mobile App Development:</strong> Native iOS and Android
            applications
          </li>
          <li>
            <strong>Progressive Web Apps (PWAs):</strong> App-like experiences
            through web browsers
          </li>
          <li>
            <strong>UI/UX Design:</strong> Intuitive interfaces with GCC
            cultural considerations
          </li>
          <li>
            <strong>API Integration:</strong> Connecting your digital presence
            with existing systems
          </li>
          <li>
            <strong>Maintenance & Support:</strong> Ongoing updates, security
            patches, and performance optimization
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          GCC-Specific Technical Considerations
        </h2>
        <p>
          We build with GCC-specific requirements in mind, including
          right-to-left (RTL) Arabic support, local payment gateway integration,
          high-performance hosting for regional speeds, and compliance with GCC
          data protection regulations.
        </p>

        <img
          src="/services/app (3).jpg"
          alt="Digital marketing strategy planning"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          From Concept to Deployment
        </h2>
        <p>
          Our end-to-end development process ensures your digital products are
          delivered on time, within budget, and to the highest quality
          standards. We combine technical excellence with strategic thinking to
          create digital assets that support your business objectives.
        </p>
        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Invest in Progressive Web Apps for the GCC
          market—they combine the reach of websites with the functionality of
          native apps while overcoming the challenge of low app store adoption
          rates in the region.
        </p>
      </div>
    ),
  },

  {
    slug: "crm-automation",
    title: "CRM & Automation (Nerou System)",
    text: "Customer relationship management systems and business process automation for improved efficiency.",
    image: "/services/animation (3).jpg",
    desc: (
      <div className="space-y-8 text-[#1C1C1C] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3">
          CRM & Automation: Transforming Customer Relationships and Operational
          Efficiency
        </h1>

        <p>
          The Nerou System provides comprehensive CRM and automation solutions
          designed specifically for GCC business environments. Our integrated
          approach helps you manage customer interactions, automate repetitive
          tasks, and gain valuable insights that drive growth and customer
          loyalty in competitive regional markets.
        </p>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          The Power of Integrated CRM and Automation
        </h2>
        <p>
          Businesses using CRM systems see sales increase by up to 29%,
          productivity rise by 34%, and customer retention improve by 27%. When
          combined with strategic automation, these systems eliminate manual
          processes, reduce errors, and free your team to focus on high-value
          activities.
        </p>

        <img
          src="/services/animation (1).jpg"
          alt="Automation workflow design"
          className="w-full md:h-[300px]  mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Nerou System Capabilities
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>360° Customer View:</strong> Unified customer profiles
            across all touchpoints
          </li>
          <li>
            <strong>Sales Pipeline Management:</strong> Visual sales processes
            with automated follow-ups
          </li>
          <li>
            <strong>Marketing Automation:</strong> Targeted campaigns based on
            customer behavior
          </li>
          <li>
            <strong>Customer Service Integration:</strong> Support ticket
            management and resolution tracking
          </li>
          <li>
            <strong>Lead Scoring & Routing:</strong> Intelligent lead
            qualification and distribution
          </li>
          <li>
            <strong>Workflow Automation:</strong> Custom automated processes for
            repetitive tasks
          </li>
          <li>
            <strong>Reporting & Analytics:</strong> Real-time insights into
            sales performance and customer trends
          </li>
          <li>
            <strong>Mobile Access:</strong> Full functionality on iOS and
            Android devices
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          GCC Business Environment Specialization
        </h2>
        <p>
          The Nerou System is customized for GCC business practices, including
          support for Arabic-English bilingual interfaces, compliance with
          regional data regulations, integration with local communication
          channels (WhatsApp Business, local SMS gateways), and alignment with
          GCC sales cycles and customer expectations.
        </p>

        <img
          src="/services/animation (2).jpg"
          alt="Automation workflow design"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />

        <h2 className="text-2xl font-bold text-[#0D1B2A]">
          Implementation and Support
        </h2>

        <p>
          We provide end-to-end implementation including data migration, custom
          configuration, staff training, and ongoing support. Our change
          management approach ensures high adoption rates and maximizes return
          on your CRM investment.
        </p>
        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Start with automating your most repetitive
          tasks first—typically lead follow-up, data entry, and reporting—as
          these yield the quickest ROI and staff adoption in CRM
          implementations.
        </p>
      </div>
    ),
  },

  {
    slug: "podcast-media-branding",
    title: "Podcast / Media Branding",
    text: "Professional media production, podcast development, and brand storytelling services.",
    image: "/services/media (1).jpg",
    desc: (
      <div className="space-y-8 text-[#1C1C1C] leading-relaxed bg-[#F9F9F9] p-8 rounded-lg">
        {/* Main Heading */}
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#0D1B2A] border-b-4 border-[#D4AF37] pb-3 flex items-center gap-2">
          <FaPodcast className="text-[#D4AF37]" /> Podcast & Media Branding:
          Amplifying Your Voice
        </h1>

        <p>
          Shourouk Media, based in Media City Qatar, brings professional podcast
          & media branding services directly to you. Whether at home, office, or
          live events, we create premium content with top-tier cameras, lights,
          and audio equipment — making your brand’s story heard across the GCC.
        </p>

        <img
          src="/services/PODCAST.PNG"
          alt="On-location podcast production setup"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />

        {/* Why This Matters */}
        <h2 className="text-2xl font-bold text-[#0D1B2A] flex items-center gap-2">
          <FaRegCheckCircle className="text-[#D4AF37]" /> Why This Matters
        </h2>
        <p>We take the studio to our guests, offering:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>More comfort and flexibility for guests</li>
          <li>Unique content captured in authentic settings</li>
          <li>Professional-grade production, wherever you are</li>
          <li>Seamless integration with platforms and audience</li>
        </ul>

        {/* Packages */}
        <h2 className="text-2xl font-bold text-[#0D1B2A] flex items-center gap-2">
          <FaVideo className="text-[#D4AF37]" /> Packages We Offer
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Record Only:</strong> Pro equipment, unedited audio/video,
            fast turnaround
          </li>
          <li>
            <strong>Record & Edit:</strong> Edited audio, animated cover, shared
            on podcast platforms
          </li>
          <li>
            <strong>Full Content Pack:</strong> Polished video, graphics,
            published across channels
          </li>
          <li>
            <strong>Turnkey Package:</strong> Editing + teaser video, 3 reels,
            analytics report
          </li>
        </ul>


        {/* Live Event Podcasting */}
        <h2 className="text-2xl font-bold text-[#0D1B2A] flex items-center gap-2">
          <MdEventAvailable className="text-[#D4AF37]" /> Live Event Podcasting
        </h2>
        <p>
          We cover live conferences, exhibitions, and events — capturing
          authentic, real-time stories and delivering instant buzz for your
          brand.
        </p>

        <img
          src="/services/COLLABORATING.PNG"
          alt="Podcast recording and content creation"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />
        {/* Remote Podcasting */}
        <h2 className="text-2xl font-bold text-[#0D1B2A] flex items-center gap-2">
          <RiRemoteControlLine className="text-[#D4AF37]" /> Remote Podcasting
        </h2>
        <p>
          For guests outside Qatar, we provide high-quality Zoom recordings with
          editing, visuals, and audio cleanup — ensuring professional results
          anywhere in the world.
        </p>

        {/* Collaborations */}
        <h2 className="text-2xl font-bold text-[#0D1B2A] flex items-center gap-2">
          <FaUsers className="text-[#D4AF37]" /> Notable Collaborations
        </h2>
        <p>
          We’ve highlighted innovation in healthcare with <strong>Itqan</strong>{" "}
          and
          <strong> Hamad Medical Corporation</strong>, featuring experts such as
          Prof. Giuseppe Saglio and Prof. Robert Christian Wolf. Our podcasts
          bring forward pioneering ideas that shape industries.
        </p>

        <img
          src="/services/COLLABORATIONS.PNG"
          alt="Collaboration with industry experts"
          className="w-full md:h-[300px] mx-auto rounded-lg shadow-md"
        />

        {/* Impact */}
        <h2 className="text-2xl font-bold text-[#0D1B2A] flex items-center gap-2">
          <FaGlobe className="text-[#D4AF37]" /> Impact & Reach
        </h2>
        <p>
          Our shows <strong>I Wanna Grow</strong> and{" "}
          <strong>In the Game</strong> have over
          <strong> 7 million Facebook views</strong>. We don’t just create
          content — we ensure it’s seen via Business Startup platforms across
          Qatar, Oman, and Saudi Arabia.
        </p>

        <p className="p-4 border-l-4 border-[#D4AF37] bg-white">
          <strong>Pro Tip:</strong> Repurpose podcast content into blog posts,
          reels, and newsletters to maximize ROI from every episode.
        </p>
      </div>
    ),
  },
];

export default ServicesData;
