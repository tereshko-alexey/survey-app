const QUESTION_INDUSTRY = "What industry does your organization operate in?";
const QUESTION_ORGANIZATION_SIZE = "What is the size of your organization?";
const QUESTION_DEPARTMENT_ROLE =
  "Could you please specify your function or role within your department?";

export const questions = [
  {
    key: "General",
    sectorNumber: "1",
    value: QUESTION_INDUSTRY,
    ballPosition: { left: 2150, top: 400 },
    modalPosition: { left: 1550, top: 200 },
  },
  {
    key: "General",
    sectorNumber: "1",
    value: QUESTION_ORGANIZATION_SIZE,
    ballPosition: { left: 1700, top: 460 },
    modalPosition: { left: 1100, top: 200 },
  },
  {
    key: "General",
    sectorNumber: "1",
    value: QUESTION_DEPARTMENT_ROLE,
    ballPosition: { left: 1200, top: 540 },
    modalPosition: { left: 600, top: 250 },
  },
  {
    key: "Strategy and Commitment",
    sectorNumber: "2",
    value:
      "How well is your digital strategy integrated with your overall business strategy?",
    ballPosition: { left: 600, top: 650 },
    modalPosition: { left: 690, top: 450 },
  },
  {
    key: "Strategy and Commitment",
    sectorNumber: "2",
    value:
      "How effectively does your organization manage innovation as part of its strategic objectives?",
    ballPosition: { left: 300, top: 950 },
    modalPosition: { left: 390, top: 750 },
  },
  {
    key: "Customer Engagement and Experience",
    sectorNumber: "2",
    value:
      "How effectively does your organization utilize customer data to enhance engagement and personalize experiences?",
    ballPosition: { left: 850, top: 1110 },
    modalPosition: { left: 930, top: 750 },
  },
  {
    key: "Customer Engagement and Experience",
    sectorNumber: "2",
    value:
      "How integrated are your digital channels in providing a seamless omnichannel experience for customers?",
    ballPosition: { left: 1550, top: 1080 },
    modalPosition: { left: 1620, top: 750 },
  },
  {
    key: "Technology",
    sectorNumber: "3",
    value:
      "How effectively does your organization integrate and utilize emerging technologies (e.g., AI, IoT, blockchain) in its operations?",
    ballPosition: { left: 2150, top: 1080 },
    modalPosition: { left: 1550, top: 750 },
  },
  {
    key: "Technology",
    sectorNumber: "3",
    value:
      "How robust are your cybersecurity measures to protect organizational data and maintain stakeholder trust?",
    ballPosition: { left: 2450, top: 1150 },
    modalPosition: { left: 2530, top: 700 },
  },
  {
    key: "Operations",
    sectorNumber: "4",
    value:
      "How effectively does your organization utilize automation in its operational processes?",
    ballPosition: { left: 2670, top: 1430 },
    modalPosition: { left: 2050, top: 1000 },
  },
  {
    key: "Operations",
    sectorNumber: "4",
    value:
      "How does your organization leverage real-time data analytics to enhance operational decision-making?",
    ballPosition: { left: 2400, top: 1590 },
    modalPosition: { left: 1950, top: 1000 },
  },
  {
    key: "Organization and Culture",
    sectorNumber: "5",
    value:
      "How effectively does your organization's leadership drive and support digital transformation initiatives?",
    ballPosition: { left: 2160, top: 1650 },
    modalPosition: { left: 2100, top: 1050 },
  },
  {
    key: "Organization and Culture",
    sectorNumber: "5",
    value:
      "How would you describe the culture of innovation within your organization?",
    ballPosition: { left: 1960, top: 1710 },
    modalPosition: { left: 1600, top: 1090 },
  },
];

export const questionsOptions = [
  {
    key: QUESTION_INDUSTRY,
    value: [
      "Retail",
      "XaaS (Anything-as-a-Service)",
      "Hardware",
      "Healthcare",
      "Financial Services",
      "Manufacturing",
      "Education",
      "Government",
      "Telecommunications",
    ],
  },
  {
    key: QUESTION_ORGANIZATION_SIZE,
    value: [
      "Small (1-50 employees)",
      "Medium (51-250 employees)",
      "Large (251-1000 employees)",
      "Enterprise (1001+ employees)",
    ],
  },
  {
    key: QUESTION_DEPARTMENT_ROLE,
    value: [
      "Advertising or Marketing",
      "Customer Intelligence/Analytics",
      "Human Resources/Training",
      "IT Department",
      "Operations",
      "Sales and Distribution",
      "Supply Chain",
      "Product Development",
      "Digital",
      "E-Commerce",
    ],
  },
  {
    key: "How well is your digital strategy integrated with your overall business strategy?",
    value: [
      "Our organization does not have a defined digital strategy",
      "We have some basic ideas about digital strategy, but they are not formally documented or aligned with our business strategy",
      "Our digital strategy is documented and somewhat aligns with our business goals, but integration into daily operations is inconsistent",
      "Our digital strategy is fully documented, aligns with our business goals, and is regularly reviewed and updated to ensure it supports operational needs",
      "Our digital strategy is an integral part of our business strategy. It drives all major business decisions and innovations, with continuous improvement based on market trends and performance analytics",
    ],
  },
  {
    key: "How effectively does your organization manage innovation as part of its strategic objectives?",
    value: [
      "There is no formal process for managing innovation within our strategic planning",
      "We occasionally discuss innovation during strategic meetings, but there are no dedicated resources or structured processes in place",
      "We have established specific roles or teams focused on innovation, though these efforts are often siloed and not always aligned with broader strategic goals",
      "Innovation management is a formal part of our strategic planning. We allocate budget and resources specifically for innovation projects that support strategic objectives",
      "Innovation is deeply embedded in our organizational culture. We continuously monitor emerging trends and technologies, systematically integrate them into our strategic planning, and measure their impact on achieving business objectives",
    ],
  },
  {
    key: "How effectively does your organization utilize customer data to enhance engagement and personalize experiences?",
    value: [
      "We do not collect or utilize customer data to enhance engagement or personalize experiences",
      "We collect some customer data, but it is rarely used to influence engagement strategies or personalization efforts",
      "We regularly collect customer data and occasionally use it to tailor interactions and improve engagement on a basic level",
      "Our organization systematically uses customer data to drive personalized marketing campaigns and improve customer service interactions",
      "We leverage advanced analytics on comprehensive customer data to dynamically personalize experiences across all touchpoints in real-time, significantly enhancing customer satisfaction and loyalty",
    ],
  },
  {
    key: "How integrated are your digital channels in providing a seamless omnichannel experience for customers?",
    value: [
      "We have no integration between our digital channels; each operates independently with no shared information or strategy",
      "Some of our digital channels are loosely connected, but customers often experience inconsistencies when moving between them",
      "Our digital channels are moderately integrated, offering a somewhat consistent experience across a few major platforms",
      "We have strong integration across most digital channels, ensuring that customers receive a consistent experience as they switch between different modes of interaction",
      "All our digital channels are fully integrated into a seamless omnichannel system that provides an exceptional and consistent user experience across all platforms and devices, backed by real-time data updates and proactive service options",
    ],
  },
  {
    key: "How effectively does your organization integrate and utilize emerging technologies (e.g., AI, IoT, blockchain) in its operations?",
    value: [
      "We do not explore or integrate any emerging technologies within our operations",
      "We are aware of emerging technologies but have not yet started integrating them into our operations",
      "We have begun to experiment with some emerging technologies in isolated parts of our operations",
      "Emerging technologies are systematically integrated into several key areas of our operations, enhancing efficiency and innovation",
      "Our organization fully leverages a range of emerging technologies across all operations, driving significant improvements in performance and competitive advantage",
    ],
  },
  {
    key: "How robust are your cybersecurity measures to protect organizational data and maintain stakeholder trust?",
    value: [
      "We have no formal cybersecurity measures in place; data protection is not prioritized",
      "Basic cybersecurity measures are implemented, but they are not comprehensive or fully enforced across the organization",
      "We have established more structured cybersecurity protocols and regularly update them, though some areas may still be vulnerable",
      "Comprehensive cybersecurity strategies are actively managed and enforced, with regular audits and updates to address new threats",
      "Our cybersecurity measures are industry-leading, incorporating advanced threat detection and response systems; we maintain high levels of stakeholder trust through transparency and resilience against attacks",
    ],
  },
  {
    key: "How effectively does your organization utilize automation in its operational processes?",
    value: [
      "We do not use automation in any of our operational processes",
      "We have identified potential areas for automation but have not implemented any solutions yet",
      "Some basic automation is used in routine tasks, but it is not widespread or fully integrated into our operations",
      "Automation is integrated into most of our key operational processes, significantly improving efficiency and consistency",
      "Our operations are highly automated with advanced technologies (AI, machine learning), allowing for real-time decision-making and minimal manual intervention",
    ],
  },
  {
    key: "How does your organization leverage real-time data analytics to enhance operational decision-making?",
    value: [
      "We do not collect or analyze real-time data for operational decision-making",
      "We occasionally collect some real-time data, but it is not systematically analyzed or used for decision-making",
      "We regularly collect real-time data and are starting to use it for making informed decisions in specific areas",
      "Comprehensive real-time data analytics are employed across various operations, significantly enhancing our responsiveness and decision-making capabilities",
      "Our organization excels in using sophisticated real-time analytics tools that drive proactive decisions across all levels of operations, ensuring optimal performance and strategic alignment",
    ],
  },
  {
    key: "How effectively does your organization's leadership drive and support digital transformation initiatives?",
    value: [
      "Leadership is unaware or uninvolved in digital transformation efforts",
      "Leadership acknowledges the need for digital transformation but has not yet actively supported or driven initiatives",
      "Some leaders are advocates for change, driving pilot projects but lacking organization-wide involvement or commitment",
      "Most leaders are committed to digital transformation, with clear strategies and resources allocated; however, some areas still lack full leadership buy-in",
      "Leadership consistently champions digital transformation across all levels and departments, fully integrating digital goals into organizational strategy and operations",
    ],
  },
  {
    key: "How would you describe the culture of innovation within your organization?",
    value: [
      "There is no focus on innovation; the environment is risk-averse with a preference for maintaining status quo",
      "Innovation occurs sporadically and typically in response to immediate challenges rather than through proactive strategy",
      "There are some formal processes for innovation, but they are not widely adopted or consistently applied across the organization",
      "Innovation is encouraged with systematic processes in place that are recognized and utilized by most employees; however, it may not be deeply embedded in all areas yet",
      "A robust culture of innovation permeates all aspects of the organization; continuous improvement and risk-taking are embedded into everyday practices, driving ongoing transformation and growth",
    ],
  },
];
