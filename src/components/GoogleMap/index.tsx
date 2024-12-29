import './styles.css'

export default function GoogleMap() {
    return (
        <div className="mapouter">
            <div className="gmap_canvas" style={{  }}>
                <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Rua%20Coronel%20Jos%C3%A9%20Carvalho%20de%20Oliveira,%20701,%20Uberaba,%20Curitiba&t=&z=19&ie=UTF8&iwloc=&output=embed"                  
                    title="Google Map"
                />
                <a href="https://embedgooglemap.net/124/" />
                <br />
                <a href="https://www.embedgooglemap.net" />
            </div>
        </div>
    );
}

