import './songForm.scss'
import { useState } from "react";
import SheetDB from 'sheetdb-js'

export default function SongForm() {

    const [name, setName] = useState('');
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('')
    const [submited, setSubmited] = useState(false)
    const [error, setError] = useState(false)


    const handleForm = () => {
        if(canSubmit()){
            SheetDB.write('https://sheetdb.io/api/v1/3d7siae9az7d2', { sheet: 'Sheet1', data: { Nombre: name, Canción: song, Autor: artist } }).then(function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            })
            setSubmited(true)
        }else{
            setError(true)
        }
    }

    const canSubmit = () => {
        if (name === '') {
            return false
        }
        if (song === '') {
            return false
        }
        if (artist === '') {
            return false
        }
        return true
    }

    return (
        <>
            {submited ? (
                <div className='submited'>
                    <span>Hemos recibido tu sugerencia.</span> Nos vemos en la pista de baile!
                </div>
            ) : (
                <div className="form">

                    {error ? (
                        <div className='error-message'>
                            *Asegurate de rellenar todos los campos.
                        </div>
                    ) : undefined}
                    <div className="field">
                        <label className={name !== '' ? ('filled') : undefined} htmlFor="name" >Tu Nombre</label>
                        <input type="text" required name="name" value={name} onChange={(el) => setName(el.target.value)} />
                    </div>
                    <div className="field">
                        <label className={song !== '' ? ('filled') : undefined} htmlFor="song">Canción</label>
                        <input type="text" required name="song" value={song} onChange={(el) => setSong(el.target.value)} />
                    </div>
                    <div className="field">
                        <label className={artist !== '' ? ('filled') : undefined} htmlFor="artist">Autor</label>
                        <input type="text" required name="artist" value={artist} onChange={(el) => setArtist(el.target.value)} />
                    </div>
                    <button onClick={handleForm}>Sugerir Canción</button>
                </div>
            )}


        </>

    )
}