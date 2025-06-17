// src/data/categories.js
export const serviceCategories = [
    {
      name: "🏠 Home Services",
      subcategories: [
        "Plumbing", "Electrical", "Carpentry", "Painting",
        "Appliance Repair", "Cleaning Services", "Pest Control",
        "AC / Heating Services",
      ],
    },
    {
      name: "🌳 Outdoor Services",
      subcategories: [
        "Gardening / Landscaping", "Tree Cutting", "Lawn Mowing",
        "Fence Repair", "Car Washing",
      ],
    },
    {
      name: "🔧 Vehicle Services",
      subcategories: [
        "Bike Repair", "Car Mechanic", "Tyre Replacement",
        "Battery Jumpstart",
      ],
    },
    {
      name: "🧹 Personal Services",
      subcategories: [
        "Housekeeping", "Laundry & Ironing", "Home Salon Services",
        "Baby Sitting", "Elderly Care",
      ],
    },
    {
      name: "💻 Tech Support",
      subcategories: [
        "Mobile Repair", "Laptop/Computer Repair", "CCTV Installation",
        "Internet/Wi-Fi Issues",
      ],
    },
    {
      name: "🧱 Construction & Renovation",
      subcategories: [
        "Masonry", "Tiling / Flooring", "Roofing",
        "Interior Designing", "False Ceiling",
      ],
    },
    {
      name: "📦 Moving & Delivery",
      subcategories: [
        "Packers & Movers", "Courier Pickup", "Furniture Shifting",
      ],
    },
    {
      name: "⚒️ Other / General",
      subcategories: ["Custom Task", "Urgent Help Needed", "Not Sure / Need Guidance"],
    },
  ];
  
  // Helper function to get a flat list of all subcategories for filters
  export const getAllSubcategories = () => {
    let allSubs = [];
    serviceCategories.forEach(mainCat => {
      allSubs = [...allSubs, ...mainCat.subcategories];
    });
    return [...new Set(allSubs)].sort(); // Returns a unique, sorted list of all subcategories
  };