import Header from "../components/Header";
import Card from "../components/Card";
import Tododcontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"
function Landing() {
    const data = useLocation()

    return (
        <div className="bg-black p-16">
          <div className="bg-white p-10 border rounded-md">
            <Header name={data.state.user}></Header>
            <div className="flex justify-between gap-7 my-5 flex-wrap">
              <Card bg="pink" t1="23" t2="Chennai" />
              <Card bg="violet" t1="August 14" t2="11:20:05" />
              <Card bg="skyblue" t1="Built using" t2="React" />
            </div>
            <Tododcontainer/>
          </div>
        </div>
      );
}
export default Landing