import '../../App.css';
export const Card = ({name,flag,abbr}) => {
  return <>
    <div className="countryCard">
        <img src={flag} alt={abbr} style={{height:"100px",width:"100px"}}/>
        <h5 style={{color:"black"}}>{name}</h5>
    </div>
  </>;
};