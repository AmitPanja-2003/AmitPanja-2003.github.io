const x = document.querySelector('#name');
        document.querySelector('#btnSubmit').addEventListener('click', function (e) {
            e.preventDefault();
            const div = document.createElement('div');
            div.className = 'script';
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            const img = document.createElement('img');
            img.id = 'avatar';
            img.alt = 'github_avatar';
            const followers = document.createElement('span');
            followers.id = 'followers';
            followers.innerText = 'Followers:';
            const following = document.createElement('span');
            following.innerText = 'Following:';
            following.id = 'following';
            const span = document.createElement('span');
            span.id = 'repos';
            span.innerText = 'Repos:';
            const br1 = document.createElement('br');
            const br2 = document.createElement('br');
            const br3 = document.createElement('br');
            const repo = document.createElement('h3');
            repo.innerText = 'Repos List:';
            const repos = document.createElement('div');
            repos.className = 'repos';
            div.append(h2, h3, img, followers, following,span, br1, br2, br3, repo, repos);
            document.querySelector('.container').append(div);
            async function fun2() {
                var res = await fetch('https://api.github.com/users/' + x.value);
                var result = await res.json();
                h2.innerHTML = result.name;
                h3.innerText = '(@';
                h3.innerText += result.login;
                h3.innerText += ')';
                img.src = result.avatar_url;
                followers.innerText += result.followers;
                following.innerText += result.following;
                const br4 = document.createElement('br');
                followers.append(br4);
                const br5 = document.createElement('br');
                following.append(br5);
            }
            fun2();
            fun1();
            async function fun1() {
                var response = await fetch('https://api.github.com/users/' + x.value + '/repos');
                var data = await response.json();
                console.log(data);
                span.innerText += data.length;
                data.forEach(ele => {
                    let btn = document.createElement("a");
                    btn.innerText = ele.name;
                    btn.className = 'btn';
                    btn.setAttribute("href",ele.html_url)
                    btn.target = '_blank';
                    repos.append(btn);
                })
            }
            document.querySelector('#name').value = '';
        })