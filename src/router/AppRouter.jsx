import { Route, Routes } from "react-router-dom"
import { HomePage, ServicesPage, ContactPage, DoctorPage, TimeTablePage, Pages, BlogPage, ShopPage, ClinicPage  } from "../MedLife/pages"
import { Navbar } from "../ui/components/Navbar/Navbar"

export const AppRouter = () => {
  return (
   <>
   <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<ClinicPage/>} />
        <Route path="/medical/services" element={<ServicesPage/>} />
        <Route path="/medical/doctor" element={<DoctorPage/>} />
        <Route path="/medical/timetable" element={<TimeTablePage/>} />
        <Route path="/medical/#" element={<Pages/>} />
        <Route path="/medical/blog" element={<BlogPage/>} />
        <Route path="/medical/shop" element={<ShopPage/>} />
        <Route path="/medical/contact" element={<ContactPage/>} />
    </Routes>
   </>
  )
}
