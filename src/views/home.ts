import {appDiv as app} from "../main";

export default function home() {
    if (app === null) {
        throw new Error("App div not found");
    }
    const news = document.getElementById('news');
    if (news === null) {
        return;
    }
    news.innerHTML = `
        <news-card src="https://via.placeholder.com/500x300" href="#"
                   title="Nouveauté 1" alt="Image">
            <p class="larger"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue commodo, euismod turpis non, porttitor lorem. Donec eu nisi lorem. Aliquam non lacus volutpat, egestas lorem quis, mattis eros. Vivamus iaculis odio id tortor finibus posuere. Phasellus nec tellus porta, rhoncus felis nec, elementum lectus. Sed quis metus tincidunt, euismod turpis nec, aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis lorem quis odio pharetra convallis. Aliquam ultrices vestibulum sollicitudin. Duis at magna vitae augue hendrerit interdum. Ut commodo mollis diam, ut convallis enim vehicula eu. Duis vel elit sed odio porttitor scelerisque. Aliquam sit amet rutrum ante, id imperdiet nibh. Donec nec mauris et libero malesuada sollicitudin sit amet quis tellus. </p>
        </news-card>
        <news-card src="https://via.placeholder.com/500x300" href="#"
                   title="Nouveauté 2" alt="Image">
            <p class="larger">Aliquam quis purus nulla. In consectetur eget mi ut imperdiet. Phasellus tortor ante, blandit non est ut, elementum dignissim ante. Donec commodo eleifend varius. Fusce nec lobortis erat. Mauris egestas eleifend tellus, non ultricies ligula pharetra sit amet. Donec a sapien iaculis, gravida nibh sed, faucibus nibh. Morbi iaculis porttitor posuere. Sed ut justo congue, pharetra enim sit amet, sollicitudin turpis. Phasellus eu posuere justo.</p>
        </news-card>
        <news-card src="https://via.placeholder.com/500x300" href="#"
                   title="Nouveauté 3" alt="Image">
            <p class="larger">Donec quam diam, dictum quis nulla nec, condimentum finibus lacus. Morbi consequat gravida leo, vel laoreet orci. Ut quis orci aliquet, hendrerit nisl nec, pretium mi. In id porttitor orci. Donec nec ante eu dolor accumsan finibus eu id sapien. Ut urna ligula, dapibus non volutpat vel, vehicula ac nibh. Proin vulputate risus consectetur rhoncus porta. Nulla venenatis et est rutrum finibus. Curabitur at mauris sed est semper lacinia.</p>
        </news-card>
    `;
}
