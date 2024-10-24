import Nav from './Nav';
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner'
class Tutor extends React.Component {
    constructor(props) {
        super(props);
        this.state={loading: false}
        this.showProfile = this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
    }
    showProfile() {
        document.getElementById("profile").style.display = 'block';
    }
    hideProfile() {
        document.getElementById("profile").style.display = 'none';
    }

    render() {
        return(
                <div class="">
                    <Nav/>
                    <div class="">
                        <div class="margin-top-md">
                            <div class="p-head "><div class="font-xl  margin-top-sm Roboto text-bold session text-white">AMAZINGDEVOPS <span class="text-salmon">PROGRAMS</span></div></div>
                            <div class="input-variant-x hidden margin-top-xsm bg-variant-2 text-white Mulish">TUTORS
                                <button class="float-right  border-rad-md border-0 border-none pointer text-bold text-gray play font-xsm">CREATE A NEW TUTOR</button>        
                            </div>  
                            <div class="overlay" id="profile">
                                <div class="form2 padding-md  p bg-white">
                                    <span class="material-symbols-outlined float-lefts pointer close" onClick={this.hideProfile}>
                                        close
                                    </span>
                                    <div class="grid-container-2s">
                                        <div class="aside2  center  ">
                                            <div class="profile"></div> </div>
                                        <div class="main-content-2">
                                            <div class="font-vl    open-sans"> 
                
                                                <div class="">Samuel Maina</div>
                                            </div> 
                                            <div class=" center grid-container-2s   open-sans"> 
                                                <div class="aside2 text-gray center">
                                                    <span class="material-symbols-sharp  ">
                                                        location_on
                                                    </span> </div>
                                                <div class="font-sm main-content-2 open-sans">Kenyan</div>
                                            </div> 
                                            <div class=" center grid-container-2s   open-sans"> 
                                                <div class="aside2 text-gray center">
                                                    <span class="material-symbols-sharp  ">
                                                        mail
                                                    </span> </div>
                                                <div class="font-sm main-content-2 open-sans">javadev@samuelmaina.com</div>
                                            </div> 
                
                                            <div class=" center grid-container-2s   open-sans"> 
                                                <div class="aside2 text-gray center">
                                                    <span class="material-symbols-sharp  ">
                                                        phone
                                                    </span> </div>
                                                <div class="font-sm main-content-2 open-sans"> +254 020 8152 149</div>
                                            </div>  
                
                                            <div class=" margin-top-sm margin-sm text-gray"> <div class="center font-xsm btn-variant-5"> <span class="material-symbols-sharp center  text-green border-rad-md">
                                                        send
                                                    </span> Start a conversation with Samuel</div></div>
                                        </div>
                
                
                                    </div>
                                    <div class="main-contentd"><span class="font-lg Roboto">About me</span>
                                        <div class="Mulish">The eldest daughter of a jeweler, Jolie (1896–1997),[1] and a soldier, Vilmos Gábor (1881–1962), she was born in 1915 in Budapest. Her parents were both from Jewish families.[2][3][4] She is listed in Hungary: Jewish Names from the Central Zionist Archives, under her first married name, as "Magda Bychowsky".[5]
                
                                            During World War II, Gabor was reported to have been the fiancée of the Portuguese ambassador to Hungary, Carlos Sampaio Garrido;[6] another source claims she was his mistress and another claims she was his aide.[7][8][9] After she fled to Portugal in 1944, following the Nazi occupation of Hungary, and, with Sampaio's assistance, she was reportedly the mistress of a Spanish nobleman, José Luis de Vilallonga.[10] Gabor arrived in the United States in February 1946, from Natal, Brazil. Within a year of her arrival she married an American citizen, William Rankin, and remained in the country.[5] </div>
                                    </div>
                                    <p>Classes</p>
                                    <div class="center font-sm open-sans">
                                        <div class="square"></div>International Shipping</div>
                                    <div class="chat">close</div>
                                </div>
                            </div>
                            <button class="border-none session outline-none margin-top-xsm padding-sm bg-variant-1 bg-yellow text-white">Register a new tutor</button>
                            <div class="content-body-md session centerd">
                                <div class="tutor pointer flex-horizontal bg-white border-rad-md relative input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                <div class="tutor pointer flex-horizontal bg-white border-rad-md relative input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                <div class="tutor pointer flex-horizontal bg-white border-rad-md relative input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                <div class="tutor pointer flex-horizontal bg-white border-rad-md  relative input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                <div class="tutor pointer flex-horizontal bg-white border-rad-md relative input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                <div class="tutor pointer flex-horizontal bg-white  relative border-rad-md input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                <div class="tutor pointer flex-horizontal bg-white  relative border-rad-md input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                <div class="tutor pointer flex-horizontal bg-white border-rad-md relative input-varianjt-x center" onClick={this.showProfile}>
                                    <div class="profile-sm center"></div>        
                                    <span class="text-green font-sm">Samuel maina</span>
                                    <div class="badge Roboto font-xsm margin-sm text-white">Active</div>
                                </div>
                                
                                
                
                            </div>
                
                        </div> 
                    </div>
                </div>);
    }
}
;
export default Tutor;

