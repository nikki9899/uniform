import React from "react";

const dropdownContent = [
  {
    title: "Industrial Clothing",
    items: [
      "Safety Suits",
      "Work Clothes",
      "Industrial Aprons",
      "Bee Veil",
      "Chemical Resistant Clothing",
      "Rubber Suit",
      "Insulated Clothing",
      "Fire Proximity Suits",
      "Reflective Clothing",
      "Industrial Coverall",
      "Work Shirts",
      "ESD Garments",
      "Safety T Shirt",
      "Safety Shirt",
      "Working Trouser",
      "High Visibility Clothing",
      "Industrial Trousers",
      "Sand Blasting Suit",
      "Immersion Suit",
    ],
  },

  {
    title: "Security Guard Uniform",
    items: [
      "Men Security Uniform",
      "Security Guard Shoes",
      "Security Guard Belt",
      "Security Guard Caps",
      "Security Guard Shirt",
      "Security Jacket",
    ],
  },

  {
    title: "Commercial Uniforms",
    items: [
      "Worker Uniform",
      "Scout Uniforms",
      "Staff Uniform",
      "Corporate Uniform",
      "Driver Uniform",
      "Driver Uniform",
      "Uniform Accessories",
      "Petrol Pump Uniform",
      "Doctor Coat",
      "Advocate Gown",
      "Housekeeping Uniform",
      "Uniform Pants",
      "College Uniform",
      "Uniform Belts",
      "SPA Uniform",
      "Air Hostess Uniform",
      "Uniform Shirt",
      "Technician Uniform",
      "Uniform Cap",
      "Sales Uniform",
      "Drama Dress",
      "Photographer Jackets",
      "Pilot Uniform",
      "Institutional Uniform",
      "Ladies Housekeeping Uniform",
      "Uniform Necktie",
      "Promotional Uniform",
    ],
  },

  {
    title: "Corporate Uniforms",
    items: [
      "Uniform Saree",
      "Logo T Shirt",
      "Men Corporate T Shirt",
      "Men Corporate Uniform",
      "Office Wear",
      "Ladies Corporate Uniform",
      "Men Corporate Shirt",
      "Corporate Shirt",
      "Men Dress Socks",
      "Executive Shirt",
    ],
  },

  {
    title: "Hospital Uniforms",
    items: [
      "Doctor Coat",
      "Lab Apron",
      "Disposable Lab Coat",
      "School Lab Coat",
      "Nonwoven Lab Coat",
      "Scrub Suits",
      "Nurse Uniform",
      "Medical Apron",
      "Medical Scrub",
      "Pharmaceutical Uniform",
      "Nurse Coat",
      "Ward Boy Uniform",
      "Medical Scrub Set",
      "Dentist Apron",
      "Scrub Tops",
      "Nurse Cap",
      "Cotton Scrubs",
      "Nurse Tops",
      "Scrub Pant",
    ],
  },

  {
    title: "Hotel Uniforms",
    items: [
      "Housekeeping Uniform",
      "Chef Coats",
      "Waiter Uniform",
      "Catering Uniform",
      "Restaurant Uniform",
      "Chef Uniform",
      "Bell Boy Uniform",
      "Chef Caps",
      "Oven Mitt",
      "Chef Hat",
      "Chef Pants",
      "Chef Scarf",
      "Chef Shirt",
      "Chef Skull Cap",
    ],
  },

  {
    title: "School Uniforms",
    items: [
      "Kids School Uniforms",
      "School T Shirts",
      "School Belt",
      "School Tie",
      "School Uniform Shirt",
      "Boys School Uniform",
      "School Blazer",
      "School Sweater",
      "Girls School Uniform",
      "School Sports Uniform",
      "School Tracksuit",
      "School Trousers",
    ],
  },
];

const ColumnFlex = (props) => {
  return <div className={"flex flex-col"}>{props.children}</div>;
};

const DropdownHeading = (props) => {
  return (
    <h1 className={"text-lg font-bold tracking-tighter mb-3 mt-8"}>
      {props.children}
    </h1>
  );
};

const DropdownEle = (props) => {
  return <p1 className={'block'}>{props.children}</p1>;
};

const Dropdown = () => {
  return (
    <div className={"bg-background absolute left-0 top-0 right-0"}>
      <div className={"flex gap-x-52 w-full px-24 pb-8"}>
        <ColumnFlex className={"flex flex-col"}>
          {dropdownContent.slice(0, 2).map((item) => (
            <>
              <DropdownHeading>{item.title}</DropdownHeading>
              {item.items.map((ele) => (
                <DropdownEle>{ele}</DropdownEle>
              ))}
            </>
          ))}
        </ColumnFlex>

        <ColumnFlex>
          {dropdownContent.slice(2, 3).map((item) => (
            <div>
              <DropdownHeading>{item.title}</DropdownHeading>
              {item.items.map((ele) => (
                <DropdownEle>{ele}</DropdownEle>
              ))}
            </div>
          ))}
        </ColumnFlex>

        <ColumnFlex>
          {dropdownContent.slice(3, 5).map((item) => (
            <div>
              <DropdownHeading>{item.title}</DropdownHeading>
              {item.items.map((ele) => (
                <DropdownEle>{ele}</DropdownEle>
              ))}
            </div>
          ))}
        </ColumnFlex>

        <ColumnFlex>
          {dropdownContent.slice(5).map((item) => (
            <div>
              <DropdownHeading>{item.title}</DropdownHeading>
              {item.items.map((ele) => (
                <DropdownEle>{ele}</DropdownEle>
              ))}
            </div>
          ))}
        </ColumnFlex>
      </div>
    </div>
  );
};

export default Dropdown;
