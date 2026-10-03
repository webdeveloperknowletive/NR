/**
 * NR Real Estate - Master Verified Projects Data Layer
 * Migrated and normalized from verified Project A source records.
 */

export const BUILDER_DATA = {
  company: {
    name: "NR Real Estate",
    logo: "/brand/nr-real-estate-logo.png",
    tagline: "Crafting Exceptional Living & Plotted Communities in Pune",

    contact: {
      phone: "+91 86003 33633",
      whatsapp: "918600333633",
      email: "enquiry@thequill-pune.com",
      address: "Sr no 51/2, Tajnemala-chowisawadi road, Wadmukhwadi, Tal haveli, Pune - 412105"
    },

    social: {
      instagram: "https://www.instagram.com/nr_realestate_pune",
      facebook: "",
      linkedin: "",
      youtube: "https://www.youtube.com/@nrrealestatepune"
    }
  },

  projects: [
    {
      id: "the-quill",
      slug: "the-quill",
      name: "The Quill",

      classification: {
        type: "RESIDENTIAL",
        category: "2 BHK Luxury Residences",
        status: "Under Construction / Booking Open",
        structure: "Ground + Mezzanine Commercial + 14 Residential Floors"
      },

      location: {
        city: "Pune",
        area: "Wadmukhwadi, PCMC",
        address: "S. No. 51/2(P), Kaljewadi - Wadmukhwadi Road, Tajne Mala, Wadmukhwadi, Charholi Bk, PCMC, Pune - 412 105"
      },

      content: {
        tagline: "2 BHK Premium / Luxury Residential Homes at Wadmukhwadi, Pune",
        shortDescription: "A landmark 14-story residential tower offering exquisitely crafted 2 BHK luxury homes with curated rooftop amenities, grand entrance, and seamless connectivity to Pune Airport and major IT corridors.",
        overview: "The Quill is an elevated living experience situated within the thriving PCMC growth corridor of Wadmukhwadi. Designed by Studio Arcon, the project seamlessly combines modern architecture, AAC block earthquake-resistant construction, branded lifestyle fittings, and exclusive rooftop leisure amenities spanning a multi-purpose lawn, open gymnasium, and scenic walking track."
      },

      media: {
        logo: "/projects/the-quill/images/the-quill-logo.png",
        hero: "/projects/the-quill/images/the-quill-day-hero.jpg",
        dayImage: "/projects/the-quill/images/the-quill-day-hero.jpg",
        nightImage: "/projects/the-quill/images/the-quill-night-view.jpg",
        gallery: [
          "/projects/the-quill/images/the-quill-day-hero.jpg",
          "/projects/the-quill/images/the-quill-night-view.jpg",
          "/projects/the-quill/images/the-quill-street-view.jpg",
          "/projects/the-quill/images/the-quill-front.jpg"
        ],
        floorPlans: [
          {
            title: "2 BHK 3D Isometric Unit Cut-Section",
            image: "/projects/the-quill/floor-plans/the-quill-3d-plan.jpg",
            description: "Complete Layout: Living Room, Master Bed with Attached Bath, Kitchen, Balcony & Common Bath"
          }
        ],
        layouts: [
          {
            title: "Terrace Layout Plan",
            image: "/projects/the-quill/layouts/the-quill-terrace-layout.jpg",
            description: "Rooftop Leisure Amenities & Landscaped Terrace Layout"
          }
        ],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "2 BHK Luxury Residence",
          wings: "Wing A & Wing B (1st to 14th Floor)",
          features: "Spacious Living Room with Balcony, Master Bedroom with En-suite Bath, Kitchen with Dry Balcony, Guest Bedroom, Common Bath",
          planImage: "/projects/the-quill/floor-plans/the-quill-3d-plan.jpg"
        },
        {
          type: "Commercial Retail / Ground & Mezzanine",
          wings: "Ground Floor & Mezzanine Floor",
          features: "Prime road-frontage commercial shop units serving everyday resident conveniences",
          planImage: "/projects/the-quill/images/the-quill-street-view.jpg"
        }
      ],

      amenities: [
        { title: "Children's Play Area", category: "Community" },
        { title: "Creche Facility", category: "Community" },
        { title: "Indoor Games Room", category: "Leisure" },
        { title: "Exclusive Main Gate with Security", category: "Security" },
        { title: "Solar PV Cells for Common Areas", category: "Eco" },
        { title: "Rain Water Harvesting System", category: "Eco" },
        { title: "Branded Stretcher Lift", category: "Convenience" },
        { title: "Generator Backup (Lift & Common)", category: "Utility" },
        { title: "CCTV Cameras in Common Areas", category: "Security" },
        { title: "Fire Fighting System", category: "Safety" },
        { title: "Provision for EV Charging Point", category: "Eco" },
        { title: "Drivers Room & Common Restrooms", category: "Convenience" },
        { title: "Garbage Management System", category: "Utility" },
        { title: "Rooftop Multi-Purpose Lawn", category: "Rooftop" },
        { title: "Rooftop Performance Stage", category: "Rooftop" },
        { title: "Rooftop Open Gymnasium", category: "Rooftop" },
        { title: "Rooftop Scenic Walking Track", category: "Rooftop" },
        { title: "Rooftop Senior Citizen Seating", category: "Rooftop" },
        { title: "Rooftop Kids Play Area & Toddler Zone", category: "Rooftop" },
        { title: "Rooftop Feature Accent Walls", category: "Rooftop" },
        { title: "Rooftop Workstation cum Buffet Area", category: "Rooftop" }
      ],

      specifications: {
        structure: [
          "Earthquake resistant RCC frame structure designed to seismic standards",
          "All internal and external walls built with precision AAC blocks",
          "External double-coat artificial sand plaster for superior weatherproofing",
          "Internal walls treated with smooth gypsum finish"
        ],
        flooring: [
          "Premium 24 x 24 vitrified tile flooring in living room, dining, and bedrooms",
          "Anti-skid ceramic flooring in attached terraces, dry balconies, and bathrooms",
          "Designer glazed dado tiles up to 2 ft height above kitchen platform",
          "Full height coloured glazed tiles dado up to lintel level in bathrooms",
          "Full height white glazed tiles dado up to lintel level in separate W.C."
        ],
        doorsWindows: [
          "Main entrance door with designer laminated sheet, latch lock, and laminated door frames",
          "Internal water-resistant flush doors with sturdy door frames",
          "Granite framing for all door openings and bathroom entries",
          "Powder-coated aluminium sliding windows with built-in mosquito nets",
          "Robust MS safety grills for all external windows",
          "Powder-coated aluminium sliding doors leading to private balconies"
        ],
        kitchen: [
          "Durable granite kitchen platform with stainless steel sink",
          "Provision for water purifier and exhaust fan in kitchen",
          "All plumbing completely concealed using premium branded CPVC/UPVC pipes",
          "High-quality branded CP fittings and sanitary ware in all bathrooms",
          "Provision for geyser and exhaust fan in bathrooms"
        ],
        electrical: [
          "Concealed copper wiring with Polycab cables and branded modular switches",
          "Dedicated TV point in living room and ambient electrical points in all rooms",
          "Provision for home inverter wiring",
          "Internal walls finished with premium Oil Bond Distemper (OBD)",
          "External walls coated with weather-shield acrylic emulsion paint"
        ],
        other: []
      },

      connectivity: [
        { category: "Transit & Connectivity", points: [
          { place: "Pune International Airport", dist: "10 km" },
          { place: "Pune - Alandi Road", dist: "0.5 km" },
          { place: "Vishrantwadi Chowk", dist: "8 km" },
          { place: "Bhosari", dist: "7 km" },
          { place: "Pimpri Railway Station", dist: "13 km" },
          { place: "Chinchwad Hub", dist: "14 km" }
        ]},
        { category: "Education", points: [
          { place: "RKL International School", dist: "50 m" },
          { place: "Shri Wageshwar Vidyalay", dist: "300 m" },
          { place: "Redcliffe School", dist: "2.5 km" },
          { place: "MIT College Campus", dist: "2.5 km" },
          { place: "D.Y. Patil College & International School", dist: "4.0 km" },
          { place: "Army Public School (Dighi)", dist: "6.0 km" }
        ]},
        { category: "IT & Business Hubs", points: [
          { place: "Talwade IT Park", dist: "10 km" },
          { place: "Yerwada Business District", dist: "10 km" },
          { place: "Kalyani Nagar Commerce Zone", dist: "14 km" },
          { place: "EON IT Park (Kharadi)", dist: "16 km" },
          { place: "Hinjewadi Rajiv Gandhi IT Park", dist: "20 km" },
          { place: "Markal & Bhosari MIDC Clusters", dist: "3 to 10 km" }
        ]},
        { category: "Healthcare & Banking", points: [
          { place: "Deokar Hospital", dist: "500 m" },
          { place: "Rode Hospital", dist: "1.3 km" },
          { place: "Dr. Sonawane Child & Dental Hospital", dist: "2.2 km" },
          { place: "D.Y. Patil Multispeciality Hospital", dist: "4.0 km" },
          { place: "Axis Bank", dist: "500 m" },
          { place: "HDFC, ICICI & Bank of Maharashtra", dist: "1.2 km" }
        ]}
      ],

      consultants: [
        { role: "Architect", name: "Studio Arcon", contact: "020-2765 0921" },
        { role: "RCC Consultant", name: "Mr. Ajay Bhilare & Associates", contact: "020 2997 999" },
        { role: "Legal Advisor", name: "Adv. Manoj P. Agarwal & Adv. Rajat M. Agarwal", contact: "9422 027 285" },
        { role: "Brand Consultant", name: "Namo Design (Ketan Shrishrimal)", contact: "9922 447 824" }
      ],

      rera: {
        number: "",
        details: "MahaRERA Registration details and project filings are maintained under the official Maharashtra Real Estate Regulatory Authority portal (maharera.mahaonline.gov.in). Contact our sales office for verified QR code scan and official registration documents."
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: true
      }
    },

    {
      id: "high-street-park",
      slug: "high-street-park",
      name: "High Street Park",

      classification: {
        type: "PLOT_BUNGALOW",
        category: "Premium Bungalow N.A. Plots",
        status: "Booking Open / Sanctioned Plots",
        structure: "Sanctioned N.A. Plotted Layout (Plots A-01 to A-18 and B-01 to B-23)"
      },

      location: {
        city: "Pune",
        area: "Wadmukhwadi",
        address: "S. No. 164, Alankapuram Road, 18m/90m Road Touch, Wadmukhwadi, Pune - 411078"
      },

      content: {
        tagline: "Premium Bungalow N.A. Plots / Row House Bungalow Plots in Wadmukhwadi, Pune",
        shortDescription: "A gated premium N.A. residential bungalow plotted community strategically located right on the 90m New Airport Road and 18m Alankapuram Road junction, featuring complete infrastructure readiness.",
        overview: "High Street Park is a distinguished plotted land development offering clear-title N.A. bungalow plots. Designed for discerning families seeking independent villa living or long-term capital appreciation, the project features extensive internal concrete roads, individual water & electrical connections, security perimeter, and direct access to Pune Airport and educational epicenters."
      },

      media: {
        logo: "/projects/high-street-park/images/high-street-park-logo.png",
        hero: "/projects/high-street-park/images/high-street-park-plots.jpg",
        dayImage: "/projects/high-street-park/images/high-street-park-plots.jpg",
        nightImage: "",
        gallery: [
          "/projects/high-street-park/images/high-street-park-plots.jpg",
          "/projects/high-street-park/images/high-street-park-villa.jpg",
          "/projects/high-street-park/images/high-street-park-hero.jpg",
          "/projects/high-street-park/images/high-street-park-main.jpg"
        ],
        floorPlans: [
          {
            title: "Sanctioned N.A. Layout Scheme",
            image: "/projects/high-street-park/floor-plans/high-street-park-layout.jpg",
            description: "Approved layout plan comprising numbered residential plots in Series A and Series B"
          }
        ],
        layouts: [
          {
            title: "Layout Plan & Plot Demarcations",
            image: "/projects/high-street-park/layouts/high-street-park-layout.jpg",
            description: "Sanctioned N.A. layout plan with 90m New Airport Road and 18m Alankapuram Road access"
          }
        ],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Series A Plots",
          units: "Plots A-01 through A-18",
          features: "Sanctioned N.A. bungalow land parcels with individual utility connections"
        },
        {
          type: "Series B Plots",
          units: "Plots B-01 through B-23",
          features: "Independent row house and custom villa residential plots"
        }
      ],

      amenities: [
        { title: "CCTV & Security Cabin", category: "Security", description: "24x7 gated entrance surveillance with manned security cabin" },
        { title: "Lavish Entrance Gate", category: "Design", description: "Architecturally styled grand designer entrance portal" },
        { title: "Internal Concrete Roads", category: "Infrastructure", description: "Spacious 9.00m and 4.00m high-grade paved concrete internal access ways" },
        { title: "90m & 18m Road Touch", category: "Connectivity", description: "Direct connectivity to 90m wide New Airport Road and 18m main road" },
        { title: "Compound Perimeter Wall", category: "Security", description: "Secure boundary compound wall around the entire plotted project" },
        { title: "Dedicated Light Transformer", category: "Utility", description: "Robust power transformer infrastructure for uninterrupted supply" },
        { title: "Individual Power Meter Cables", category: "Utility", description: "Pre-laid power conduits and meter provisions to plot boundaries" },
        { title: "Water Line to Each Plot", category: "Utility", description: "Dedicated municipal/potable water supply pipe routed to every plot" },
        { title: "Storm Water Drainage Line", category: "Drainage", description: "Underground storm water management network ensuring zero waterlogging" },
        { title: "Underground Drainage Line", category: "Drainage", description: "Systematic sanitary sewage and drainage network" },
        { title: "Smart Street Lights", category: "Infrastructure", description: "Energy-efficient illumination across all internal avenues" },
        { title: "Vaastu Shastra Compliant", category: "Design", description: "Harmoniously aligned plot orientations adhering to positive energy principles" }
      ],

      specifications: {
        structure: [
          "Sanctioned N.A. Plotted Layout order",
          "High-grade paved concrete internal roads (9.00m and 4.00m width)",
          "Compound perimeter boundary wall enclosing entire development"
        ],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [
          "Dedicated high-capacity electricity transformer",
          "Individual power meter cable conduits to each plot boundary",
          "Energy-efficient smart street lights across all avenues"
        ],
        other: [
          "Underground drainage & sewage network",
          "Underground storm water drainage system",
          "Dedicated municipal/potable water line to each plot",
          "Manned security cabin & 24x7 CCTV surveillance"
        ]
      },

      connectivity: [
        { category: "Strategic Landmarks", points: [
          { place: "Pune International Airport", dist: "6 km" },
          { place: "Pune - Alandi Highway", dist: "0.5 km" },
          { place: "Ajinkya DY Patil University", dist: "2 km" },
          { place: "Dighi Police Station", dist: "1 km" },
          { place: "Bhosari MIDC", dist: "5 km" },
          { place: "Chakan Industrial Zone", dist: "10 km" },
          { place: "Kharadi IT Hub", dist: "10 km" },
          { place: "Hinjewadi IT Corridor", dist: "15 km" }
        ]},
        { category: "Spiritual & Civic Amenities", points: [
          { place: "Mauli Mandir (Alandi)", dist: "Proximity Hub" },
          { place: "PCMC Swimming Pool & Sports Club", dist: "Nearby" },
          { place: "Wagheshwar Temple", dist: "Nearby" }
        ]}
      ],

      consultants: [],

      rera: {
        number: "",
        details: "High Street Park is a sanctioned N.A. Plotted layout. Statutory approvals, PCMC layout sanctions, and title clearance documentation are available for verification at our sales office."
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: true
      }
    },

    {
      id: "akshardham",
      slug: "akshardham",
      name: "Akshardham NA Plotting",

      classification: {
        type: "PLOTTED",
        category: "Sanctioned N.A. Plots",
        status: "Ongoing / Booking Open"
      },

      location: {
        city: "Pune",
        area: "Wadmukhwadi",
        address: "Wadmukhwadi, PCMC Pune"
      },

      content: {
        tagline: "Sanctioned N.A. Plots in Wadmukhwadi",
        shortDescription: "Premium sanctioned NA plotted layout featuring wide paved internal concrete roads, individual utility lines, and direct highway touch.",
        overview: "Premium sanctioned NA plotted enclave with wide internal concrete roads, drainage lines, and lush green environment in Wadmukhwadi."
      },

      media: {
        logo: "",
        hero: "/projects/akshardham/images/akshardham-plots.jpg",
        gallery: [
          "/projects/akshardham/images/akshardham-plots.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Sanctioned Residential Plots",
          units: "Sanctioned Residential Plots",
          features: "Direct Main Road Connectivity"
        }
      ],

      amenities: [
        { title: "Wide Internal Concrete Roads", category: "Infrastructure" },
        { title: "Drainage Lines", category: "Utility" },
        { title: "Direct Main Road Touch", category: "Connectivity" },
        { title: "Electricity & Water Provisions", category: "Utility" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    },

    {
      id: "austin-tower",
      slug: "austin-tower",
      name: "Austin Tower",

      classification: {
        type: "COMMERCIAL_RESIDENTIAL",
        category: "Commercial & Residential Landmark",
        status: "Ongoing Project"
      },

      location: {
        city: "Pune",
        area: "Charholi",
        address: "Prime Charholi High Street Corridor, Charholi, Pune"
      },

      content: {
        tagline: "Commercial & Residential Landmark in Charholi",
        shortDescription: "High-visibility mixed-use landmark offering prime street-level retail showrooms on lower floors and contemporary residences above.",
        overview: "Contemporary mixed-use commercial and residential landmark tower featuring premier road-frontage showrooms and lifestyle residences."
      },

      media: {
        logo: "",
        hero: "/projects/austin-tower/images/austin-tower.jpg",
        gallery: [
          "/projects/austin-tower/images/austin-tower.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Retail Showrooms & Luxury Apartments",
          units: "Retail Showrooms & Luxury Apartments",
          features: "Prime Charholi High Street Corridor"
        }
      ],

      amenities: [
        { title: "Prime Road-Frontage Showrooms", category: "Commercial" },
        { title: "Modern Residential Elevators", category: "Convenience" },
        { title: "Dedicated Retail Parking", category: "Parking" },
        { title: "Security Surveillance", category: "Security" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    },

    {
      id: "beverly-hills",
      slug: "beverly-hills",
      name: "Beverly Hills",

      classification: {
        type: "RESIDENTIAL",
        category: "Premium Residential Enclave",
        status: "Ongoing Project"
      },

      location: {
        city: "Pune",
        area: "Charholi",
        address: "Prime Sector Road Touch, Charholi, Pune"
      },

      content: {
        tagline: "Premium Residential Enclave in Charholi",
        shortDescription: "Elevated multi-tower residential enclave offering modern lifestyle amenities, podium recreational decks, and scenic hill views.",
        overview: "Modern high-rise residential complex offering scenic panoramic hill views, landscaped podium amenities, and premium finishes."
      },

      media: {
        logo: "",
        hero: "/projects/beverly-hills/images/beverly-hills.jpg",
        gallery: [
          "/projects/beverly-hills/images/beverly-hills.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Modern Multi-Story Residences",
          units: "Modern Multi-Story Residences",
          features: "Scenic Hill Views & Podium Amenities"
        }
      ],

      amenities: [
        { title: "Clubhouse", category: "Leisure" },
        { title: "Landscaped Garden", category: "Community" },
        { title: "Children's Play Area", category: "Community" },
        { title: "Podium Deck", category: "Leisure" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    },

    {
      id: "sky-villas",
      slug: "sky-villas",
      name: "Sky Villas",

      classification: {
        type: "VILLAS",
        category: "Ultra Luxury Row Villas",
        status: "Ongoing Project"
      },

      location: {
        city: "Pune",
        area: "Charholi",
        address: "Gated Villa Access Way, Charholi, Pune"
      },

      content: {
        tagline: "Ultra Luxury Row Villas in Charholi",
        shortDescription: "Exclusive gated row house villas featuring architectural facades, private terrace lounges, double-height living, and personal parking.",
        overview: "Exclusive architectural row house villas featuring private terrace lounges, double-height living areas, and gated privacy."
      },

      media: {
        logo: "",
        hero: "/projects/sky-villas/images/sky-villas.jpg",
        gallery: [
          "/projects/sky-villas/images/sky-villas.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Designer Row Bungalows & Villas",
          units: "Designer Row Bungalows & Villas",
          features: "Private Terrace Lounges & Double-Height Living"
        }
      ],

      amenities: [
        { title: "Private Terrace Lounges", category: "Leisure" },
        { title: "Double-Height Living Areas", category: "Architecture" },
        { title: "Gated Security", category: "Security" },
        { title: "Dedicated Parking", category: "Convenience" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    },

    {
      id: "shiv-vihar-2",
      slug: "shiv-vihar-2",
      name: "Shiv Vihar Phase II",

      classification: {
        type: "RESIDENTIAL",
        category: "Modern Residential Homes",
        status: "Ongoing Project"
      },

      location: {
        city: "Pune",
        area: "Charholi",
        address: "Central Charholi Road, Charholi, Pune"
      },

      content: {
        tagline: "Modern 1 & 2 BHK Residential Homes in Charholi",
        shortDescription: "Phase II residential tower delivering smartly configured 1 & 2 BHK apartments engineered with premium construction standards and zero space wastage.",
        overview: "Phase II residential development providing efficient, value-optimized modern homes equipped with branded lifestyle amenities."
      },

      media: {
        logo: "",
        hero: "/projects/shiv-vihar-2/images/shiv-vihar-2.jpg",
        gallery: [
          "/projects/shiv-vihar-2/images/shiv-vihar-2.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "1 & 2 BHK Quality Homes",
          units: "1 & 2 BHK Quality Homes",
          features: "Zero Space Wastage Architecture"
        }
      ],

      amenities: [
        { title: "Branded Lift", category: "Convenience" },
        { title: "Power Backup for Common Areas", category: "Utility" },
        { title: "Security System", category: "Security" },
        { title: "24x7 Water Supply", category: "Utility" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    },

    {
      id: "shiv-aanagn",
      slug: "shiv-aanagn",
      name: "Shiv Aanagn",

      classification: {
        type: "COMPLETED",
        category: "Delivered Residential Landmark",
        status: "Completed & Handed Over"
      },

      location: {
        city: "Pune",
        area: "Charholi",
        address: "Established Residential Hub, Charholi, Pune"
      },

      content: {
        tagline: "Delivered Residential Landmark in Charholi",
        shortDescription: "Successfully delivered and fully occupied multi-story residential complex celebrated for superior build quality, durability, and on-time possession.",
        overview: "Successfully completed and delivered residential community home to hundreds of joyful families in Charholi."
      },

      media: {
        logo: "",
        hero: "/projects/shiv-aanagn/images/shiv-aanagn.jpg",
        gallery: [
          "/projects/shiv-aanagn/images/shiv-aanagn.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Fully Occupied Residential Complex",
          units: "Fully Occupied Residential Complex",
          features: "Delivered & Occupied"
        }
      ],

      amenities: [
        { title: "Completed Infrastructure", category: "Infrastructure" },
        { title: "Fully Occupied Community", category: "Community" },
        { title: "Elevators", category: "Convenience" },
        { title: "Covered Parking", category: "Parking" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    },

    {
      id: "shiv-vihar-1",
      slug: "shiv-vihar-1",
      name: "Shiv Vihar Phase I",

      classification: {
        type: "COMPLETED",
        category: "Delivered Residential Project",
        status: "Completed & Handed Over"
      },

      location: {
        city: "Pune",
        area: "Charholi",
        address: "Charholi Central, Charholi, Pune"
      },

      content: {
        tagline: "Flagship Delivered Residential Community in Charholi",
        shortDescription: "Flagship residential community delivered on schedule with premium construction quality and happy resident occupancy.",
        overview: "Flagship residential community delivered on schedule with premium construction quality and happy resident occupancy."
      },

      media: {
        logo: "",
        hero: "/projects/shiv-vihar-1/images/shiv-vihar-1.jpg",
        gallery: [
          "/projects/shiv-vihar-1/images/shiv-vihar-1.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Delivered Family Residences",
          units: "Delivered Family Residences",
          features: "Completed & Handed Over"
        }
      ],

      amenities: [
        { title: "Delivered Community", category: "Community" },
        { title: "24x7 Water Supply", category: "Utility" },
        { title: "Security Setup", category: "Security" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    },

    {
      id: "padmavati-arcade",
      slug: "padmavati-arcade",
      name: "Padmavati Arcade",

      classification: {
        type: "COMMERCIAL",
        category: "Delivered Commercial Landmark",
        status: "Completed & Operational"
      },

      location: {
        city: "Pune",
        area: "Alandi",
        address: "Main Alandi Commercial Road, Alandi, Pune"
      },

      content: {
        tagline: "Delivered Commercial Landmark in Alandi",
        shortDescription: "Thriving commercial retail & office shopping arcade serving prime business establishments and daily footfall in Alandi.",
        overview: "Thriving commercial retail & office shopping arcade serving prime business establishments and daily footfall in Alandi."
      },

      media: {
        logo: "",
        hero: "/projects/padmavati-arcade/images/padmavati-arcade.jpg",
        gallery: [
          "/projects/padmavati-arcade/images/padmavati-arcade.jpg"
        ],
        floorPlans: [],
        layouts: [],

        videos: {
          exterior: "",
          architecture: "",
          dayToNight: "",
          lifestyle: ""
        }
      },

      configuration: [
        {
          type: "Retail Stores & Professional Offices",
          units: "Retail Stores & Professional Offices",
          features: "Main Road Frontage & High Footfall"
        }
      ],

      amenities: [
        { title: "Prime Road Touch", category: "Location" },
        { title: "Retail Showrooms", category: "Commercial" },
        { title: "Commercial Offices", category: "Commercial" },
        { title: "Customer Parking", category: "Parking" }
      ],

      specifications: {
        structure: [],
        flooring: [],
        doorsWindows: [],
        kitchen: [],
        electrical: [],
        other: []
      },

      connectivity: [],
      consultants: [],

      rera: {
        number: "",
        details: ""
      },

      actions: {
        brochure: "",
        costSheet: "",
        siteVisit: false
      }
    }
  ]
};

// ==================================================
// Data Helpers
// ==================================================

export function getAllProjects() {
  return BUILDER_DATA.projects;
}

export function getProjectBySlug(slug) {
  return BUILDER_DATA.projects.find(
    project => project.slug === slug
  );
}

export function getFeaturedProject() {
  return (
    BUILDER_DATA.projects.find(
      project => project.slug === "the-quill"
    ) ||
    BUILDER_DATA.projects[0] ||
    null
  );
}

export function getProjectsByCategory(category) {
  if (!category || category === "ALL") {
    return BUILDER_DATA.projects;
  }

  return BUILDER_DATA.projects.filter(
    project =>
      project.classification?.type === category ||
      project.classification?.category === category
  );
}

// ==================================================
// Lightweight Validation Routine
// ==================================================

export function validateProjectsData(data = BUILDER_DATA) {
  const errors = [];
  const warnings = [];

  if (!data || !Array.isArray(data.projects)) {
    errors.push("BUILDER_DATA.projects array is missing or invalid.");
    return { valid: false, errors, warnings };
  }

  const slugsSeen = new Set();
  const idsSeen = new Set();

  data.projects.forEach((proj, idx) => {
    const label = proj?.name || proj?.id || `Project[${idx}]`;

    if (!proj.id) errors.push(`${label}: Missing id`);
    if (!proj.slug) errors.push(`${label}: Missing slug`);
    if (!proj.name) errors.push(`${label}: Missing name`);

    if (proj.slug) {
      if (slugsSeen.has(proj.slug)) {
        errors.push(`${label}: Duplicate slug "${proj.slug}"`);
      }
      slugsSeen.add(proj.slug);

      if (proj.slug !== proj.slug.toLowerCase()) {
        errors.push(`${label}: Slug "${proj.slug}" is not lowercase`);
      }
      if (encodeURIComponent(proj.slug) !== proj.slug) {
        errors.push(`${label}: Slug "${proj.slug}" is not URL-safe`);
      }
    }

    if (proj.id) {
      if (idsSeen.has(proj.id)) {
        errors.push(`${label}: Duplicate id "${proj.id}"`);
      }
      idsSeen.add(proj.id);
    }

    if (!proj.media || typeof proj.media !== "object") {
      errors.push(`${label}: Missing media object`);
    } else {
      if (!Array.isArray(proj.media.gallery)) {
        errors.push(`${label}: media.gallery must be an array`);
      }
      if (!Array.isArray(proj.media.floorPlans)) {
        errors.push(`${label}: media.floorPlans must be an array`);
      }
      if (!Array.isArray(proj.media.layouts)) {
        errors.push(`${label}: media.layouts must be an array`);
      }
      if (!proj.media.videos || typeof proj.media.videos !== "object") {
        errors.push(`${label}: media.videos object is missing`);
      }
    }

    if (proj.configuration && !Array.isArray(proj.configuration)) {
      errors.push(`${label}: configuration must be an array if provided`);
    }
    if (proj.amenities && !Array.isArray(proj.amenities)) {
      errors.push(`${label}: amenities must be an array if provided`);
    }
    if (proj.connectivity && !Array.isArray(proj.connectivity)) {
      errors.push(`${label}: connectivity must be an array if provided`);
    }
    if (proj.consultants && !Array.isArray(proj.consultants)) {
      errors.push(`${label}: consultants must be an array if provided`);
    }
    if (proj.specifications && typeof proj.specifications !== "object") {
      errors.push(`${label}: specifications must be an object if provided`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    projectCount: data.projects.length
  };
}
