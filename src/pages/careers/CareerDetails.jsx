import { useLoaderData} from "react-router-dom"

const CareerDetails = () => {
    const career = useLoaderData();
  return (
    <div className="career-details">
        <h1>Career Details for {career.title}</h1>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rerum fugiat non. Deleniti, cupiditate nemo magnam eaque rem mollitia debitis aliquid ipsam vel expedita esse voluptatem, in consectetur eligendi nisi. Obcaecati necessitatibus praesentium nihil harum! Voluptatibus est in beatae iure.</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({params}) => {
     try {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/careers/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error('Error fetching career details:', error.message);
    throw error;
  }
}

export default CareerDetails