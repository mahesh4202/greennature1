import React from 'react'
import QRCoding from './QRCoding'
import './DownloadApp.css'

const DownloadApp = () => {
  return (
    <div className='container d-flex'>
        <div>
            <QRCoding />
        </div>
        <div className='middle'>
            <div>
                <p>Click below buttons or Scan QR Code to download <span style={{ color:"#05a039"}}>"Green Nature"</span> App</p>
                <a href="/" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
                <a href="/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
            </div>
        </div>
    </div>
  )
}

export default DownloadApp