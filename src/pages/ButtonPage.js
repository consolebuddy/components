import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function ButtonPage() {

  const handleClick = () => {
    //console.log("click")
  }

  return (
    <div>
      <div>
        <Button success primary outline rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click here!</Button>
      </div>
      <div>
        <Button>
          <GoCloudDownload />
          Buy Now!!</Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>Something!</Button>
      </div>
    </div>
  )
}

export default ButtonPage;