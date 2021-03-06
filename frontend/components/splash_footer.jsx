import React from 'react';

class SplashFooter extends React.Component {
    reload() {
        window.location.reload();
    }
    render() {
        return (
            <div className="footer">
                <div className="separate">
                    <img src={window.logo} className="splash-picture" />

                </div>
                

                <div className="footer3">
                    <h3>Signed Artists</h3>
                    <a className="artist-links" href="https://www.youtube.com/watch?v=l0U7SxXHkPY&ab_channels=FutureVEVO"><p>Nayvadius Cash</p></a>
                    <a className="artist-links" href="https://www.youtube.com/watch?v=yzTuBuRdAyA&ab_channels=TheWeekndVEVO"><p>Abel Makkonen Tesfaye</p></a>
                    <a className="personal-links" href="https://www.youtube.com/watch?v=XEJLuJyxLDE&ab_channels=dojacatVEVO"><p>Amala Ratna Zandile Dlamini</p></a>
                    <a className="personal-links" href="https://www.youtube.com/watch?v=KnZ8h3MRuYg&ab_channels=TravisScottVEVO">Jacques Berman Webster II</a>
                    <a className="personal-links" href="https://www.youtube.com/watch?v=DmWWqogr_r8&list=RDEMXkM2nJEjVBDVM0dz8BCQqA&index=2&ab_channels=21SavageVEVO"><p>Shayaa Bin Abraham-Joseph</p></a>
                    <a className="personal-links" href="https://www.youtube.com/watch?v=bnFa4Mq5PAM&ab_channels=LILUZIVERT">Symere Woods</a>

                </div>

                <div className="footer-1">
                    <h3>Skills</h3>
                    <p>Redux</p>
                    <p>Ruby</p>
                    <p>Ruby on Rails</p>
                    <p>JavaScript</p>
                    <p>SQL</p>
                    <p>React</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                </div>

            </div>
        )

    }
}
export default SplashFooter; 