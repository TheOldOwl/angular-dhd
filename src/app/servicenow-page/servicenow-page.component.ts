import { Component, OnInit } from '@angular/core';
import { faReply } from '@fortawesome/free-solid-svg-icons';

import { DhdRouteService } from '../routing.service';

@Component({
  selector: 'app-servicenow-page',
  templateUrl: './servicenow-page.component.html',
  styleUrls: ['./servicenow-page.component.scss']
})
export class ServicenowPageComponent implements OnInit {

  detailsOn = {
    itsm: false,
    itsmPro: false
  };
  itbaPaExpanded: boolean = false;
  itbaDmExpanded: boolean = false;
  faReply = faReply;

  itsm: any = [
    {
      title: "Incident Management",
      details: `<p>Incident management is the process of managing IT service disruptions and restoring services within agreed service level agreements (SLAs). </p>
      <p>The scope of incident management starts with an end user reporting an issue and ends with a service desk team member resolving that issue. </p>
      <h3>Benefits </h3>
      <p>Restore services faster by enabling agents to manage work and collaborate using a single platform for IT processes </p>
      <p>Drive lower call volume using the self-service portal and ServiceNow chatbots </p>
      <p>Deliver a better consumer experience through intuitive omni-channel self-service and transparent, two-way communications </p>`,
      showDetails: false,
      img: "assets/itsm/incident-mng.png"

    },
    {
      title: "Problem Management",
      details: `<p>Problem management is the process responsible for managing the lifecycle of all problems that happen or could happen in an IT service. </p>
      <p>The primary objectives of problem management are to prevent problems and resulting incidents from happening, to eliminate recurring incidents, and to minimize the impact of incidents that cannot be prevented. </p>
      <h3>Benefits </h3>
      <p>Minimize service disruptions by proactively using built-in dashboards for service performance and configurations.</p>
      <p>Speed up service restoration by creating immediate visibility into known errors and workarounds for all IT staff to use.</p>
      <p>Accelerate root cause resolution with structured problem analysis and by correlating problems and coordinating workflows.</p>`,
      showDetails: false,
      img: "assets/itsm/problem-mng.png"
    },
    {
      title: "Change and Release Management",
      details: `<p>Change management is the process responsible for controlling the life cycle of all changes to minimize the risk of
      disruption to IT services.</p>
  <p>Release management is the process of planning, building, testing, preparing and deploying new code and services to
      production environments. Software developers and IT professionals alike contribute to the release process in order
      to
      quickly and reliably deploy services to end-users.</p>
  <h3>Benefits</h3>
  <p>Integrate change processes across IT with a single, auditable repository of all planned changes using the CAB
      Workbench.</p>
  <p>Align with the pace of DevOps using automated change approval policies.</p>
  <p>Reduce risk and improve governance with visual conflict detection and a controlled release management process.</p>`,
      showDetails: false,
      img: "assets/itsm/change-mng.png"
    },
    {
      title: "Request Management",
      details: `<p>Request fulfillment is the process responsible for managing the life cycle of all service requests from the users. </p>
      <h3>Benefits </h3>
      <p>Deliver a consumer - style experience through a familiar, easy to-use shopping cart checkout interface from any device </p>
      <p>Improve service quality by removing manual tasks and fulfillment delays with automated workflows and approvals </p>
      <p>Increase end user satisfaction by keeping them informed with status updates and notifications about their requests </p>`,
      showDetails: false,
      img: "assets/itsm/request-mng.png"
    },
    {
      title: "Asset and Cost Management",
      details: `<p>Asset management is the process of planning and controlling the acquisition, operation, maintenance, renewal, and
      disposal of organizational assets. This process improves the delivery potential of assets and minimizes the costs
      and risks involved. </p>
  <h3>Benefits</h3>
  <p>Know and control your assets - Optimize asset lifecycle investments to deliver better IT services and make smarter
      decisions.</p>
  <p>Reduce asset costs - Lower asset costs and automate asset lifecycle processes to minimize wasted resources.</p>
  <p>Mitigate risk - Enforce asset policies and regulatory requirements to limit risks.</p>`,
      showDetails: false,
      img: "assets/itsm/asset-mng.png"
    },
    {
      title: "Knowledge Management*",
      details: `<p>Knowledge management (KM) is the process of creating, sharing, using and managing the knowledge and information of an organization.</p>
      <p>It refers to a multidisciplinary approach to achieve organizational objectives by making the best use of knowledge. </p>
      <h3>Benefits </h3>
      <p>Increase user satisfaction - Provide consistent, proven resolutions for your customers and employees to boost self-service. </p>
      <p>Promote knowledge sharing - Empower agents to create articles in the context of their work and harvest knowledge from communities. </p>
      <p>Drive continuous improvement - Identify knowledge gaps, curate new content, and track usage, governance, and quality trends.</p>`,
      showDetails: false,
      img: "assets/itsm/knowledge-mng.png"
    },
    {
      title: "Configuration Management*",
      details: `<p>Configuration management is a process for maintaining computer systems, servers, and software in a desired,
      consistent state. </p>
  <p>To effectively manage and improve your systems, you need to know exactly what assets are in your IT environment and
      have current, accurate configuration data. With an accurate configuration management database (CMDB), it's easy to
      understand your organization's IT environment, particularly in the areas of service impact analysis, asset
      management, compliance, and configuration management. </p>
  <h3>Benefits</h3>
  <p>Migrate to a single platform for smooth management across all applications and processes</p>
  <p>Trust your CMDB to be a complete and compliant single system of record for business-critical processes</p>
  <p>Visualize complex data to understand impact and risk, make better decisions, and provide better business services</p>`,
      showDetails: false,
      img: "assets/itsm/config-mng.png"
    },
    {
      title: "Service Level Management*",
      details: `<p>Service Level Management is the process which is responsible for negotiating Service Level Agreements and ensuring
      that they are met. </p>
  <p>ServiceNow® Service Level Management (SLM) is a comprehensive platform capability for documenting and tracking all
      service commitments between IT, service providers, and customers.</p>
  <h3>Benefits</h3>
  <p>Drive greater customer satisfaction with IT services by meeting time and quality expectations</p>
  <p>Avoid service degradation by spotting trends and patterns early and preventing potential breaches</p>
  <p>Promote better IT/business partnership through common services expectations and correct services measurement and
      reporting</p>`,
      showDetails: false,
      img: "assets/itsm/sla.png"
    },
    {
      title: "Reports and Dashboards*",
      details: `<p>ServiceNow® Reporting enables you to create and distribute reports that show the current state of instance data, such
      as how many open incidents of each priority there are. Reporting functionality is available by default for all
      tables, except for system tables. </p>
  <p>The ServiceNow® Dashboards product enables you to display multiple performance analytics, reporting, and other widgets
      on a single screen. Use dashboards to create a story with data you can share with multiple users.</p>
  <h3>Benefits</h3>
  <p>Standardized reporting - define report sources with standard data sets that users can leverage to create their own
      reports</p>
  <p>Create custom reports to see data on any ServiceNow application or process using the report designer</p>
  <p>Flexible delivery - schedule automated report runs and email distributions</p>`,
      showDetails: false,
      img: "assets/itsm/reports.png"
    },
    {
      title: "Walk-Up Experience",
      details: `<p>ServiceNow® Walk‑up Experience is a simple way to manage face‑to‑face IT support requests. With online check‑in via the
      web or Now Mobile app, geo location capabilities, and accurate queue estimates, this application provides a satisfying
      walk‑up support experience for end users and service desk agents.</p>
  <h3>Benefits</h3>
  <p>Boost customer satisfaction by providing transparent and efficient face-to-face support experience</p>
  <p>Save time via employee online check-in or mobile and live helpdesk updates</p>
  <p>Manage demand with full visibility into inventory levels and service times</p>`,
      showDetails: false,
      img: "assets/itsm/walk-up.png"
    },
    {
      title: "Now Mobile",
      details: `<p>With Now Mobile, you can find answers and get stuff done across IT, HR, facilities, finance, legal, and other
      departments—all from a mobile app powered by the Now Platform®.</p>
  <h3>Benefits</h3>
  <p>Deliver tailored mobile experiences with an app powered by a single cloud platform.</p>
  <p>Enable employee self-service for better experiences and lower costs with Virtual Agent.</p>
  <p>Provide fast, easy access to common tasks across IT, HR, facilities, finance, and legal from one location.</p>`,
      showDetails: false,
      img: "assets/itsm/placeholder.png"
    },
    {
      title: "Mobile Agent ",
      details: `<p>Mobile consumer apps enable you to connect with friends, hail a ride, or order takeout food—with just a few taps or
      swipes. Now get work done on your phone just as easily. </p>
  <h3>Benefits</h3>
  <p>Give your agents the tools and data they need to complete tasks wherever they may be.</p>
  <p>Take advantage of mobile device hardware to get work done easier.</p>
  <p>Keep KPIs at your fingertips with real-time mobile dashboards.</p>`,
      showDetails: false,
      img: "assets/itsm/placeholder.png"
    },
    {
      title: "Surveys and Assessments*",
      details: `<p>ServiceNow® Surveys drive up customer satisfaction (CSAT) by giving you an intuitive and powerful interface to
      measure customer experience and expectations. Create clear and relevant internal or public surveys and collect
      responses right from within the Now Platform®. It’s easy to automatically analyze and publish results. </p>
  <h3>Benefits</h3>
  <p>Boost customer satisfaction by automatically linking survey results to relevant records, and driving improvements
      accordingly</p>
  <p>Deliver a consistent experience with all services, surveys, and assessments built on the Now Platform</p>
  <p>Administer surveys easily via email clients and chat interfaces</p>`,
      showDetails: false,
      img: "assets/itsm/survey.png"
    },
    {
      title: "Agent Workspace",
      details: `<p>Solve issues faster with a workspace built to facilitate resolutions. From a single view, get full context and
      AI-assisted recommendations to resolve issues quickly. </p>
  <h3>Benefits</h3>
  <p>Work on multiple issues concurrently in an optimized, intuitive layout.</p>
  <p>Resolve issues faster with automated suggestions based on machine learning.</p>
  <p>Keep agents informed of all updates related to an issue with a live activity feed.</p>`,
      showDetails: false,
      img: "assets/itsm/placeholder.png"
    }
  ]

  itsmPro: any = [
    {
      title: "Predictive Intelligence",
      details: `<p>Predictive Intelligence gets issues to resolution faster using machine learning to intelligently categorize, route,
      prioritize and assign issues, with recommendations based on patterns and context.</p>
  <h3>When does it help?</h3>
  <p>When a user raises an IT ticket, it has to be assigned properly. Someone could do this manually, or it could be a
      semi-automated process using assignment rules. But even then, the rules must be created manually, and there could be
      tens or hundreds of assignment groups to manage. Service teams end up with a long queue of tickets to triage before they
      can get to fixing user issues. As volumes increase, it gets harder to see meaningful patterns and pick the right
      assignment group. Before you know it, response times slow further and the backlog creeps up.</p>
  <h3>How does it work?</h3>
  <p>Predictive Intelligence uses advanced machine learning to automatically categorise, route and assign IT tickets. When a
      user raises a ticket, the algorithm scans the description text and assigns it to the most relevant category. Values are
      set automatically without human intervention, which speeds up the whole process and helps reduce long ticket queues. At
      the heart of Predictive Intelligence is a predictive model that can be trained based on past experience. So, if the
      algorithm assigns a ticket to the wrong category and this is corrected by a human, it learns from the mistake and
      changes its behaviour for next time.</p>`,
      showDetails: false,
      img: "assets/itsm/placeholder.png"
    },
    {
      title: "Virtual Agent",
      details:`<p>Virtual Agent is an enterprise chatbot solution native to the Now Platform® that enables you to resolve common
      requests, increase customer satisfaction, and keep your workforce focused on what matters.</p>
  <h3>When does it help?</h3>
  <p>The workplace is more IT-driven than ever, so users need their issues to be resolved quickly. To take the pressure
      off service staff, many organisations offer online support material, allowing users to self-serve. Nevertheless,
      these knowledge bases can be difficult to navigate, making it hard to track down relevant answers. As a result,
      queries end up coming into the service desk anyway. Agents get overloaded with repetitive routine requests, taking
      time away from higher-value tasks.</p>
  <h3> How does it work? </h3>
  <p> Virtual Agent makes it easy for you to deploy chatbots to answer those routine user queries, on demand, on your
      choice of messaging platform. Out of the box, you have access to pre-defined conversation workflows for common
      requests like ordering an item, resetting a password, and searching a knowledge base. It’s also easy to develop,
      test, and deploy your own bespoke workflows using our Virtual Agent Designer graphical tool. Users can interact with
      any of these workflows via the web-based agent on Service Portal, but what really drives adoption is making the
      Virtual Agent available on iOS and Android, and collaboration tools like Slack and Microsoft Teams – which is easy
      to do via our custom scripting tool.</p>`,
      showDetails: false,
      img: "assets/itsm/virtual-agent.png"
    },
    {
      title: "Performance Analytics",
      details: `<p>Performance Analytics puts the power of data in the hands of your service agents and managers, so they can make
      smarter decisions and drive successful service delivery. </p>
  <h3>When does it help?</h3>
  <p>While service desk tickets can be categorised and routed to relevant groups, ultimately they are resolved by
      individual agents. Because everyone’s knowledge and experience is different, decisions are made in different ways.
      There’s no single or shared view on the best approach. Managers would like an objective way to help agents make
      fact-based decisions, but they don’t want a complicated or expensive solution that requires specialist skills to get
      up and running. They need something that will keep pace with their fast-changing service world. </p>
  <h3>How does it work? </h3>
  <p>Performance Analytics embeds analytics into the platform that agents use every day, giving them real-time visibility
      and 360° insight into past, present, and future performance. Agents get access to trusted, actionable data within
      their existing service platform, which provides insights to help them make decisions that improve service quality
      and efficiency. At a level up, managers get a secure and simple view of how people are performing against key
      metrics and KPIs, allowing them to take proactive steps to improve and optimise IT processes in line with broader
      business goals. Performance Analytics provides the foundation on which to drive continuous improvement in IT service
      delivery. </p>`,
      showDetails: false,
      img: "assets/itsm/perform.png"
    },
    {
      title: "Continual Improvement",
      details: `<p>Continual Improvement Management leverages the Now Platform and Performance Analytics to provide a structured framework that brings people, processes and data together in one place, so you can automatically initiate and track service improvements over time. </p>
      <h3>When does it help?</h3>
      <p>Generally speaking, organizations want to be in a state of continual improvement. Rather than reacting to a dip in performance flagged up in a quarterly report, they want access to real-time feedback so problems can be fixed right away. Sounds great in theory, but making it happen is hard across a large service environment. You need to gather insights and ideas into one place, then priorities the improvements to act on first. You also need to measure the effort and outcomes of each initiative, so you can justify it back to the business.  </p>
      <h3>How does it work?  </h3>
      <p>Continual Improvement Management helps embed the concept of rolling improvements into your everyday business activity. It pulls together data on all your improvement initiatives into a single view, so you can see the current status, time to completion and resource allocated. Initiatives are ranked based on ROI and effort, so you can validate budget and resource decisions. Also, if business goals change, it’s easy to reallocate and reprioritize improvements via the drag-and-drop interface. You can track how initiatives are delivering against expected business outcomes. For example, you can see how your ‘Mean Time to Resolution’ KPI is contributing to the business goal of raising employee productivity. Continual Improvement Management also includes a ‘virtual coach’ for service agents, which sends best-practice tips, videos and guidelines during critical moments. It then follows up with more guidance to build their confidence and skills over time. </p>`,
      showDetails: false,
      img: "assets/itsm/improve.png"
    },
    {
      title: "Service Owner Workspace",
      details: `<p>Optimize IT services from a single workspace. Proactively solve issues, lower costs, and deliver great service
      experiences with a consolidated view of your service portfolio and performance.</p>
  <h3>Benefits</h3>
  <p>Maintain high service quality with detailed performance metrics.</p>
  <p>Enable faster service restoration by analyzing changes and trends.</p>
  <p>Manage costs by identifying service offerings with unexpectedly high spend.</p>`,
      showDetails: false,
      img: "assets/itsm/placeholder.png"
    },
    {
      title: "Vendor Manager Workspace",
      details: `<p>Monitor the performance of your company's vendors and manage all vendor-related information using the Vendor Manager
      Workspace. Assess vendor performance using configurable vendor metric indicators.</p>
  <h3>Benefits</h3>
  <p>View consolidated vendor information in a single workspace to actively manage relationships.</p>
  <p>Track performance automatically with real-time operational data captured with the Now Platform®.</p>
  <p>Remove the guesswork around assessing performance with integrated, standardized metrics.</p>`,
      showDetails: false,
      img: "assets/itsm/placeholder.png"
    }
  ]


  constructor(private routeSelected: DhdRouteService) { }

  routeId: number;
  page: string
  showDetails: number;

  ngOnInit(): void {
    this.routeSelected.currentRoutePage.subscribe(page => { this.page = page })

    this.routeSelected.currentRouteId.subscribe(id => {
      if (this.page === '/servicenow') {
        this.routeId = id;
      }
    });
  }

  onShowDetails(i: number, selection: string) {
    this.detailsOn[selection] = this.detailsOn[selection] ? false : true;
    let change = this[selection][i];
    change.showDetails = !change.showDetails;
  }

  expandSection(section: string) {
    this[section] = this[section] ? false : true;
  }


}
