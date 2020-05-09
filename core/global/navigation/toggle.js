import './toggle.scss';

export default function Toggle(data){
    return(
        <div className="nav-toggle" onClick={() => data.togz()}><span></span></div>
    )
}