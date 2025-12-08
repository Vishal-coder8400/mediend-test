"use client"
import FAQ from "./faq";

export default function Page() {

  return (
    <>
      {/* STATIC LANDING HEADER */}
  {/* STATIC LANDING HEADER */}
<div className="w-full bg-[#062D4C] h-[70px] flex items-center px-4">
  <div className="flex w-full justify-between items-center">

    {/* Logo */}
    <img
      src="/logo.png"
      alt="logo"
      className="w-[120px] cursor-pointer"
    />

    {/* Right Button */}
    <button className="bg-[#14967F] text-white px-4 py-2 rounded-full text-xs font-medium">
      Book Now
    </button>

  </div>
</div>

      {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="
  w-full max-w-[1300px] mx-auto
  px-4 sm:px-6 py-10
  grid grid-cols-2 lg:grid-cols-3 
  gap-6 lg:gap-10 items-start
">

  {/* LEFT TEXT COLUMN */}
  <div className="
    order-1
    flex flex-col justify-start
    pr-2 lg:pr-0
  ">
    <h1 className="
      font-extrabold text-black leading-tight
      text-[22px] sm:text-[24px] md:text-[28px] lg:text-4xl
      mb-4 lg:mb-8
    ">
      Permanent Surgery for <br />
      Gynecomastia in <span className="text-[#1A73E8]">Noida</span>
    </h1>

    {/* Bullet Points */}
    <ul className="
      font-medium text-black 
      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
      space-y-2 lg:space-y-4
    ">
      <li className="flex items-center gap-2 lg:gap-3">
        <span className="text-[#14967F] text-xl lg:text-4xl leading-none">❘</span>
        All Health Insurance Accepted
      </li>

      <li className="flex items-center gap-2 lg:gap-3">
        <span className="text-[#14967F] text-xl lg:text-4xl leading-none">❘</span>
        Permanent Result
      </li>

      <li className="flex items-center gap-2 lg:gap-3">
        <span className="text-[#14967F] text-xl lg:text-4xl leading-none">❘</span>
        No-Cost EMI Available
      </li>
    </ul>
  </div>


  {/* IMAGE COLLAGE — MOBILE: RIGHT SIDE */}
  <div className="
    relative order-2
    w-[170px] h-[170px]
    sm:w-[200px] sm:h-[200px]
    md:w-[250px] md:h-[250px]
    lg:w-[420px] lg:h-[420px]
    ml-auto
  ">

    {/* TOP LEFT */}
    <div className="
      absolute rotate-45 overflow-hidden rounded-2xl border-4 border-white shadow-md
      w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[95px] md:h-[95px] lg:w-[150px] lg:h-[150px]
      top-0 left-2 lg:left-8
    ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQJOyg_mPA2uRqzXqWm4x33naOdZziTPjnA&s" className="w-full h-full object-cover -rotate-45" />
    </div>

    {/* TOP RIGHT */}
    <div className="
      absolute rotate-45 overflow-hidden rounded-2xl border-4 border-white shadow-md
      w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[95px] md:h-[95px] lg:w-[150px] lg:h-[150px]
      top-0 right-2 lg:right-8
    ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYULljRVodCGbF3Y-5T4IbnZBVURUpj4JPtw&s" />
    </div>

    {/* BOTTOM LEFT */}
    <div className="
      absolute rotate-45 overflow-hidden rounded-2xl border-4 border-white shadow-md
      w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[95px] md:h-[95px] lg:w-[150px] lg:h-[150px]
      bottom-0 left-2 lg:left-8
    ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCw9k6aB2C-OCT7FXipJzK6QKp2mBhNGFspjRKfDicw&s" className="w-full h-full object-cover -rotate-45" />
    </div>

    {/* BOTTOM RIGHT */}
    <div className="
      absolute rotate-45 overflow-hidden rounded-2xl border-4 border-white shadow-md
      w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[95px] md:h-[95px] lg:w-[150px] lg:h-[150px]
      bottom-0 right-2 lg:right-8
    ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPLV2iKy4aRbrxAwa2g4_mGDWUzeqEJstVc647_8MVw&s" className="w-full h-full object-cover -rotate-45" />
    </div>

    {/* CENTER CIRCLE */}
    <div className="
      absolute rounded-full overflow-hidden border-4 border-white shadow-xl
      w-[85px] h-[85px]
      sm:w-[100px] sm:h-[100px]
      md:w-[130px] md:h-[130px]
      lg:w-[170px] lg:h-[170px]
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AmxcYf69F6xYV_FBFdbwiHYyyFXOHMdhdA&s" className="w-full h-full object-cover" />
    </div>

  </div>


  {/* FORM COLUMN */}
  <div className="
    order-3 col-span-2 lg:col-span-1
    bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]
    p-5 sm:p-6 lg:p-8
    mt-4 lg:mt-0
    w-full
  ">
    <h2 className="
      text-[18px] sm:text-[20px] lg:text-2xl 
      font-extrabold text-black
    ">
      Get Rid of Gynecomastia
    </h2>

    <div className="w-full h-[1px] bg-gray-200 my-4"></div>

    <label className="text-sm font-medium text-gray-700">Patient Name</label>
    <input
      type="text"
      placeholder="Your name"
      className="
        w-full border border-gray-300 rounded-xl px-4 py-2.5 lg:py-3 mb-4
        outline-none text-gray-700 placeholder-gray-400 shadow-sm
      "
    />

    <label className="text-sm font-medium text-gray-700">Mobile No.</label>
    <input
      type="text"
      placeholder="+91 1112223333"
      className="
        w-full border border-gray-300 rounded-xl px-4 py-2.5 lg:py-3 mb-4
        outline-none text-gray-700 placeholder-gray-400 shadow-sm
      "
    />

    <button className="
      w-full bg-[#14967F] text-white font-semibold
      py-3 rounded-xl text-lg hover:opacity-90 transition
    ">
      Get Cost Estimation
    </button>
  </div>

</section>


    
{/* ⭐ EXACT SCREENSHOT DESIGN — BUT USING YOUR TEAL COLOR (#14967F) ⭐ */}

<section className="w-full bg-[#14967F] py-3 mt-2">
  <div
    className="
      max-w-[1400px] mx-auto px-2
      grid grid-cols-4
      items-center text-center
      divide-x-[1.5px] divide-white/60
    "
  >
    {/* ITEM 1 */}
    <div className="px-1">
      <h3 className="text-[16px] font-extrabold text-white leading-tight">45K+</h3>
      <p className="text-white text-[9px] font-semibold uppercase leading-tight">
        Satisfied<br />Patients
      </p>
    </div>

    {/* ITEM 2 */}
    <div className="px-1">
      <h3 className="text-[16px] font-extrabold text-white leading-tight">300+</h3>
      <p className="text-white text-[9px] font-semibold uppercase leading-tight">
        Specialist<br />Doctors
      </p>
    </div>

    {/* ITEM 3 */}
    <div className="px-1">
      <h3 className="text-[16px] font-extrabold text-white leading-tight">500+</h3>
      <p className="text-white text-[9px] font-semibold uppercase leading-tight">
        Surgery<br />Centers
      </p>
    </div>

    {/* ITEM 4 */}
    <div className="px-1">
      <h3 className="text-[16px] font-extrabold text-white leading-tight">40+</h3>
      <p className="text-white text-[9px] font-semibold uppercase leading-tight">
        Cities
      </p>
    </div>
  </div>
</section>


{/* ⭐ 4 FEATURE BOXES SECTION — Updated with Soft Blue (#E9F1FF) ⭐ */}
<section className="w-full max-w-[1300px] mx-auto px-4 py-8 
  grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

  {/* BOX 1 */}
  <div className="bg-[#E9F1FF] p-5 lg:p-8 rounded-2xl shadow-sm">
    <h2 className="text-xl lg:text-2xl font-bold text-black mb-4">
      Why opt for Gynecomastia Surgery?
    </h2>

    <ul className="space-y-3 lg:space-y-4 text-[15px] lg:text-[17px] text-black">
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Workout, exercise, diet won't help</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Medication, fat burner pills won't work</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Homeopathy, Ayurveda is ineffective</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Surgery is the 'only' solution</li>
    </ul>
  </div>

  {/* BOX 2 */}
  <div className="bg-[#E9F1FF] p-5 lg:p-8 rounded-2xl shadow-sm">
    <h2 className="text-xl lg:text-2xl font-bold text-black mb-4">
      Benefits of Minimally Invasive Surgery over Traditional Surgery
    </h2>

    <ul className="space-y-3 lg:space-y-4 text-[15px] lg:text-[17px] text-black">
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Barely Visible Scars • No Recurrence</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Uniform skin tightening</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>45 mins procedure | Same day discharge</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Resume work in 2 days</li>
    </ul>
  </div>

  {/* BOX 3 */}
  <div className="bg-[#E9F1FF] p-5 lg:p-8 rounded-2xl shadow-sm">
    <h2 className="text-xl lg:text-2xl font-bold text-black mb-4">
      Why MediEnd ?
    </h2>

    <ul className="space-y-3 lg:space-y-4 text-[15px] lg:text-[17px] text-black">
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>30% Off On Diagnostics</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Confidential Consultation</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Private Room</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Free follow ups Post Treatment</li>
    </ul>
  </div>

  {/* BOX 4 */}
  <div className="bg-[#E9F1FF] p-5 lg:p-8 rounded-2xl shadow-sm">
    <h2 className="text-xl lg:text-2xl font-bold text-black mb-4">
      Gynecomastia Care Package
    </h2>

    <ul className="space-y-3 lg:space-y-4 text-[15px] lg:text-[17px] text-black">
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>No Hidden Charges</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Free Pick Up & Drop</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Free Post Surgery Consultation</li>
      <li className="flex gap-3"><span className="text-black text-xl lg:text-2xl">✔</span>Care Buddy Support</li>
    </ul>
  </div>

</section>


{/* ⭐ BEFORE & AFTER SECTION ⭐ */}
<section className="w-full bg-[#DEE6F3] py-10 lg:py-16 mt-6">

  {/* Heading */}
  <h2 className="text-2xl lg:text-4xl font-extrabold text-center text-black mb-6 lg:mb-12">
    Before and After
  </h2>

  <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">

    {/* CARD TEMPLATE */}
    {[ 
      "https://ayoubplasticsurgery.com/wp-content/uploads/2015/12/westfield-ayoub-omaha-gynecomastica-patient23a.jpg",
      "https://images.advancedplasticsurgeryinstitute.com/content/images/gynecomastia-368-front-thumbnail.jpg",
      "https://images.plasticsurgeryak.com/content/images/gynecomastia-surgery-13-left-oblique-thumbnail.jpg",
      "https://www.waterfronthospital.co.uk/nitropack_static/gycwWwfiJIQfiQufbflAmzWVvgpUeJdC/assets/images/optimized/rev-876bb26/www.waterfronthospital.co.uk/wp-content/uploads/2024/12/1-scaled.webp"
    ].map((src, i) => (
      <div 
        key={i}
        className="
          bg-white rounded-xl lg:rounded-2xl overflow-hidden 
          shadow-[0_3px_12px_rgba(0,0,0,0.1)]
        "
      >
        <img 
          src={src}
          className="
            w-full 
            h-[180px] lg:h-[260px] 
            object-cover
          "
        />

        {/* BEFORE & AFTER */}
        <div className="flex justify-between px-4 py-1 lg:px-5 lg:py-2">
          <span className="bg-[#14967F] text-white font-medium text-xs lg:text-sm px-3 py-1 rounded-md">Before</span>
          <span className="bg-[#14967F] text-white font-medium text-xs lg:text-sm px-3 py-1 rounded-md">After</span>
        </div>
      </div>
    ))}

  </div>
</section>

<section className="w-full  py-20">
  <div className="max-w-[1300px] mx-auto px-6">

    {/* SAME HEIGHT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* LEFT TEXT CENTERED VERTICALLY */}
      <div className="flex justify-center lg:justify-start">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
            Book Your <br /> Appointment Now
          </h2>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex justify-center lg:justify-end">
        <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 border border-gray-100">

          <label className="text-sm font-medium text-gray-700 mb-1 block">Your Name *</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 outline-none shadow-sm focus:border-[#14967F]"
          />

          <label className="text-sm font-medium text-gray-700 mb-1 block">Mobile Number *</label>
          <input
            type="text"
            placeholder="+91 1112223333"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 outline-none shadow-sm focus:border-[#14967F]"
          />

          <button className="w-full bg-[#14967F] text-white font-semibold py-3 rounded-xl text-lg shadow hover:opacity-95 transition">
            Book Appointment Now
          </button>

        </div>
      </div>

    </div>

  </div>
</section>

<section className="w-full bg-[#ECF1FB] py-10">
  <div className="
    max-w-[1200px] mx-auto 
    grid grid-cols-2 md:grid-cols-4 
    gap-6 md:gap-10 
    px-4
  ">

    {/* ITEM 1 */}
    <div className="flex items-start md:items-center justify-start gap-3">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
        stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M8 12h8M9.5 9l5 6M14.5 9l-5 6"></path>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[14px] md:text-[18px] font-semibold text-black">USFDA</span>
        <span className="text-[14px] md:text-[18px] font-semibold text-black">Approved Procedures</span>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="flex items-start md:items-center justify-start gap-3">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
        stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="8" y1="8" x2="16" y2="16" />
        <line x1="16" y1="8" x2="8" y2="16" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[14px] md:text-[18px] font-semibold text-black">No Stitches.</span>
        <span className="text-[14px] md:text-[18px] font-semibold text-black">Minimal Pain</span>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="flex items-start md:items-center justify-start gap-3">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
        stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7l8-4 8 4v5c0 5-4 9-8 9s-8-4-8-9V7z"></path>
        <path d="M12 11v4"></path>
        <path d="M10 13h4"></path>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[14px] md:text-[18px] font-semibold text-black">Insurance</span>
        <span className="text-[14px] md:text-[18px] font-semibold text-black">Paperwork Support</span>
      </div>
    </div>

    {/* ITEM 4 */}
    <div className="flex items-start md:items-center justify-start gap-3">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
        stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
        <line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[14px] md:text-[18px] font-semibold text-black">Day Care</span>
        <span className="text-[14px] md:text-[18px] font-semibold text-black">Procedure</span>
      </div>
    </div>

  </div>
</section>


<section className="w-full py-10 lg:py-14 bg-white">

  {/* HEADING */}
  <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-black mb-6 lg:mb-10 leading-tight px-4">
    Why Opt for Gynecomastia Treatment
  </h2>

  {/* TABLE CONTAINER */}
  <div className="max-w-[1200px] mx-auto bg-[#F1F3F8] rounded-xl overflow-hidden border border-[#E5E7EB]">

    {/* FIXED HEADER INSIDE BOX */}
    <div className="grid grid-cols-3 py-6 px-6 font-semibold text-[16px] lg:text-[18px] bg-[#F1F3F8]">

      {/* Empty alignment column */}
      <div></div>

      {/* Traditional */}
      <div className="text-center text-black whitespace-nowrap">
        Traditional
      </div>

      {/* Minimally Invasive */}
      <div className="text-center text-[#2563EB] whitespace-nowrap">
        Minimally Invasive
      </div>
    </div>

    {/* TABLE ROWS */}
    {[
      ["Incision Size", "5–7 CM", "1–2 CM"],
      ["Scars", "BIG SCARS", "BARELY VISIBLE"],
      ["Success Rate", "LOW", "HIGH"],
      ["Recovery Time", "1 MONTH", "1 WEEK"],
      ["Blood Loss During Treatment", "HEAVY", "NO BLOOD LOSS"],
      ["Skin Tightening", "NON UNIFORM", "UNIFORM"],
      ["Anaesthesia Required", "GENERAL", "LOCAL"],
    ].map((row, index) => (
      <div
        key={index}
        className="
          grid grid-cols-3 
          border-t border-[#E5E7EB] 
          py-4 lg:py-7 
          px-3 lg:px-6 
          items-center
        "
      >
        
        {/* LABEL */}
        <p className="font-semibold text-[13px] lg:text-[16px] text-gray-800 text-left leading-tight">
          {row[0]}
        </p>

        {/* LEFT VALUE */}
        <div className="flex justify-center">
          <div className="
            bg-white rounded-full shadow 
            px-4 py-2 lg:px-10 lg:py-3
            text-[12px] lg:text-[15px] font-semibold
            w-[120px] lg:w-[180px] text-center
          ">
            {row[1]}
          </div>
        </div>

        {/* RIGHT VALUE */}
        <div className="flex justify-center">
          <div className="
            bg-[#2563EB] text-white rounded-full shadow
            px-4 py-2 lg:px-10 lg:py-3
            text-[12px] lg:text-[15px] font-semibold
            w-[140px] lg:w-[220px] text-center
          ">
            {row[2]}
          </div>
        </div>

      </div>
    ))}

  </div>
</section>


<section className="w-full py-16 bg-[#F5F6F8]">
  <h2 className="text-center text-4xl font-extrabold text-black mb-12">
    Our Gynecomastia Specialist
  </h2>

  <div className="max-w-[1200px] mx-auto flex flex-col gap-10 px-4">

    {/* === DOCTOR CARD 1 === */}
    <div className="bg-white shadow-md rounded-3xl p-6 flex flex-row items-center gap-4">

      {/* Left Image */}
      <img 
        src="/assets/doctors/doc1.webp" 
        className="w-[90px] h-[90px] md:w-[180px] md:h-[180px] rounded-full object-cover"
      />

      {/* Right Content */}
      <div className="flex-1">

        <div className="flex justify-between items-start">
          <h3 className="text-lg md:text-2xl font-extrabold text-black flex items-center gap-1">
            Dr. Pradeep Kumar N
            <span className="text-orange-500">★</span>
            <span className="text-black text-base font-semibold">5</span>
          </h3>

          {/* Location */}
          <p className="hidden md:flex text-gray-700 items-center gap-1 text-[16px]">
            <span className="text-orange-500 text-xl">📍</span> Bangalore
          </p>
        </div>

        <p className="mt-1 text-gray-700 text-[14px] md:text-[17px] font-medium leading-tight">
          MBBS, MS General Surgery, DNB Plastic Surgery
        </p>
        <p className="text-gray-700 text-[14px] md:text-[17px] font-medium leading-tight">
          11+ Years Experience Overall
        </p>

        {/* Mobile Location */}
        <p className="md:hidden mt-1 text-gray-700 flex items-center gap-1 text-[14px]">
          <span className="text-orange-500 text-xl">📍</span> Bangalore
        </p>

        {/* Button */}
        <button className="mt-4 md:mt-6 w-full bg-[#14967F] text-white text-sm md:text-lg font-semibold py-3 md:py-4 rounded-full">
          Book Appointment Now
        </button>
      </div>
    </div>

    {/* === DOCTOR CARD 2 === */}
    <div className="bg-white shadow-md rounded-3xl p-6 flex flex-row items-center gap-4">

      {/* Left Image */}
      <img 
        src="/assets/doctors/doc2.webp" 
        className="w-[90px] h-[90px] md:w-[180px] md:h-[180px] rounded-full object-cover"
      />

      {/* Right Content */}
      <div className="flex-1">

        <div className="flex justify-between items-start">
          <h3 className="text-lg md:text-2xl font-extrabold text-black flex items-center gap-1">
            Dr. Amar Raghu
            <span className="text-orange-500">★</span>
            <span className="text-black text-base font-semibold">5</span>
          </h3>

          {/* Desktop Location */}
          <p className="hidden md:flex text-gray-700 items-center gap-1 text-[16px]">
            <span className="text-orange-500 text-xl">📍</span> Bangalore
          </p>
        </div>

        <p className="mt-1 text-gray-700 text-[14px] md:text-[17px] font-medium leading-tight">
          MBBS, MS - General Surgery, MCh - Plastic Surgery
        </p>
        <p className="text-gray-700 text-[14px] md:text-[17px] font-medium leading-tight">
          25+ Years Experience Overall
        </p>

        {/* Mobile Location */}
        <p className="md:hidden mt-1 text-gray-700 flex items-center gap-1 text-[14px]">
          <span className="text-orange-500 text-xl">📍</span> Bangalore
        </p>

        {/* Button */}
        <button className="mt-4 md:mt-6 w-full bg-[#14967F] text-white text-sm md:text-lg font-semibold py-3 md:py-4 rounded-full">
          Book Appointment Now
        </button>
      </div>
    </div>

  </div>
</section>



<section className="w-full py-20 bg-white">
  <div className="max-w-[1250px] mx-auto px-6">

    {/* Add space-y-10 for mobile spacing */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center space-y-10 md:space-y-0">

      {/* ===== IMAGE ===== */}
      <div className="order-2 md:order-1 w-full flex justify-center md:justify-start">
        <img
          src="/assets/diseases/breast_pain.webp"
          alt="Gynecomastia"
          className="w-[260px] md:w-[300px] lg:w-[330px] object-contain"
        />
      </div>

      {/* ===== HEADING + PARAGRAPH ===== */}
      <div className="order-1 md:order-2 text-center md:text-left">

        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
          What is <span className="text-black">Gynecomastia?</span>
        </h2>

        <p className="text-[17px] md:text-[19px] text-gray-700 leading-[1.8] font-medium">
          Gynecomastia surgery, also known as male breast reduction, is a cosmetic
          procedure designed to correct enlarged breast tissue in men. It involves 
          removing excess fat and glandular tissue to achieve a flatter, firmer,
          and more masculine chest contour.
        </p>

      </div>

    </div>
  </div>
</section>



<section className="w-full bg-[#F4F6F8] py-16">
  <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-3 
      gap-y-14 gap-x-10 md:gap-y-10 px-6">

    {/* COLUMN 1 — GRADES (with right border) */}
    <div className="md:border-r md:pr-10 border-gray-300">
      <h3 className="text-[26px] font-extrabold text-black mb-5">
        Grades of Gynecomastia
      </h3>

      <ul className="space-y-3 text-[17px] text-gray-700 leading-[1.7]">
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Grade 1: Puffy nipples
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Grade 2: Puffy nipples + excess fat
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Grade 3: Puffy nipples + excess fat + excess skin
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Grade 4: Female-like breast
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Most cases fall under Grade 1 or 2 — where minimally invasive surgery 
          is the best treatment option.
        </li>
      </ul>
    </div>

    {/* COLUMN 2 — PROCEDURE (with right border) */}
    <div className="md:border-r md:px-10 border-gray-300">
      <h3 className="text-[26px] font-extrabold text-black mb-5">
        What is Gynecomastia Procedure?
      </h3>

      <p className="text-[17px] text-gray-700 leading-[1.7] mb-4">
        Since there is no medication of Gynecomastia, it becomes necessary to consult a surgeon. mediEND Surgery Care performs a minimally invasive procedure which has the following benefits:
      </p>

      <ul className="space-y-3 text-[17px] text-gray-700 leading-[1.7]">
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Barely Visible Scars
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Minimal Pain Procedure
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Fast Recovery and Quick Discharge
        </li>
      </ul>
    </div>

    {/* COLUMN 3 — COST (NO BORDER) */}
    <div className="md:pl-10">
      <h3 className="text-[26px] font-extrabold text-black mb-5">
        What is the Cost of Surgery?
      </h3>

      <ul className="space-y-3 text-[17px] text-gray-700 leading-[1.7]">
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Cost depends on multiple factors
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Grade of Gynecomastia
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          Technique and equipment used
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
          For exact estimation — consultation is required
        </li>
      </ul>
    </div>

  </div>
</section>


{/* ⭐ FAQ SECTION — Modern, Clean, Real-world Design ⭐ */}
<section className="w-full pt-8 pb-20 bg-white">
  <div className="max-w-[950px] md:max-w-[1100px] lg:max-w-[1250px] mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
      FAQ
    </h2>

    {/* FAQ ACCORDION */}
    <FAQ/>
  </div>
</section>


{/* NEED HELP SECTION – EXACT SAME DESIGN BUT TEAL */}
{/* 🌟 1. NEED HELP SECTION */}
<section className="w-full bg-[#14967F] py-10 md:py-16 mt-10">
  <div className="max-w-[1200px] mx-auto px-6 text-center">

    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 md:mb-8">
      Need Help ?
    </h2>

    <button className="
      bg-black text-white font-semibold
      px-6 py-3 md:px-10 md:py-4
      rounded-full text-base md:text-lg
      w-[200px] md:w-auto mx-auto
      hover:opacity-90 transition
    ">
      Get a Call Back
    </button>

  </div>
</section>


{/* 🌟 2. FOOTER SECTION */}
<footer className="w-full bg-[#F3F3F3] py-6 text-center">

  <p className="text-[14px] font-semibold text-gray-800 mb-1">
    ©2023 MediEnd. All Rights Reserved
  </p>

  <p className="text-[12px] text-gray-600">
    DISCLAIMER: The result and experience may vary from patient to patient.
  </p>

</footer>


{/* 🌟 3. GET FREE DOCTOR CONSULTATION SECTION */}
<section className="w-full bg-[#14967F] py-10 md:py-16 sticky bottom-0 z-40">
  <div className="max-w-[1200px] mx-auto px-6 text-center">

    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 md:mb-8">
      Get Free Doctor Consultation
    </h2>

    <button
      className="
        bg-black text-white font-semibold
        px-6 py-3 md:px-10 md:py-4
        rounded-full text-base md:text-lg
        w-[200px] md:w-auto mx-auto
        hover:opacity-90 transition
      "
    >
      Book Now
    </button>

  </div>
</section>



    </>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

