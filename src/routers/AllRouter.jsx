import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Rootlayouts } from "../layouts/Rootlayouts";
import { About,Contact,Education,Home, MyServiec, Project, Skill } from "../pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Rootlayouts />}>
                    <Route index element={<Home title='Welcome' />} />
                    <Route path='about' element={<About title='About Me' />} />
                    {/* <Route path='myService' element={<MyServiec title='MyService' />} /> */}
                    <Route path='education' element={<Education title='My Education' />} />
                    <Route path='skill' element={<Skill title='My Skills' />} />
                    <Route path='project' element={<Project title='My Projects'/>}/>
                    <Route path="contact" element={<Contact title='Get in Touch'/>}/>
            </Route>
        </>
    )
);
export default router;