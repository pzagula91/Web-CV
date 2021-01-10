        const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
        const birthEl = document.querySelector('.birth');
        const adressEl = document.querySelector('.adress');
        const aboutmeEl = document.querySelector('.aboutme');
        const goalsEl = document.querySelector('.goals');
        const goals1El = document.querySelector('.goals1');
        const goals2El = document.querySelector('.goals2');
        const skillsEl = document.querySelector('.skills');
        const softEl = document.querySelector('.soft');
        const soft1El = document.querySelector('.soft1');
        const hardEl = document.querySelector('.hard');
        const hard1El = document.querySelector('.hard1');
        const educationEl = document.querySelector('.education');
        const universityEl = document.querySelector('.university');
        const unitimeEl = document.querySelector('.unitime');
        const masterEl = document.querySelector('.master');
        const university2El = document.querySelector('.university2');
        const unitime2El = document.querySelector('.unitime2');
        const bachelorEl = document.querySelector('.bachelor');
        const expirienceEl = document.querySelector('.expirience');
        const getimeEl = document.querySelector('.getime');
        const geh1El = document.querySelector('.geh1');
        const gep1El = document.querySelector('.gep1');
        const geh2El = document.querySelector('.geh2');
        const gep2El = document.querySelector('.gep2');
        const geh3El = document.querySelector('.geh3');
        const gep3El = document.querySelector('.gep3');
        const geh4El = document.querySelector('.geh4');
        const gep4El = document.querySelector('.gep4');
        const gep41El = document.querySelector('.gep41');
        const gep42El = document.querySelector('.gep42');
        const gep43El = document.querySelector('.gep43');
        const festh1El = document.querySelector('.festh1');
        const festh2El = document.querySelector('.festh2');
        const festh3El = document.querySelector('.festh3');
        const festp1El = document.querySelector('.festp1');
        const asideskillsEl = document.querySelector('.asideskills');
        const asidehobbyEl = document.querySelector('.asidehobby');
        const asidehobby1El = document.querySelector('.asidehobby1');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

                birthEl.textContent = data[attr].birth;
                adressEl.textContent = data[attr].adress;
                aboutmeEl.textContent = data[attr].aboutme;
                goalsEl.textContent = data[attr].goals;
                goals1El.innerHTML = data[attr].goals1;
                goals2El.innerHTML = data[attr].goals2;
                skillsEl.innerHTML = data[attr].skills;
                softEl.textContent = data[attr].soft;
                soft1El.innerHTML = data[attr].soft1;
                hardEl.textContent = data[attr].hard;
                hard1El.innerHTML = data[attr].hard1;
                educationEl.textContent = data[attr].education;
                universityEl.textContent = data[attr].university;
                unitimeEl.textContent = data[attr].unitime;
                masterEl.innerHTML = data[attr].master;
                university2El.textContent = data[attr].university2;
                unitime2El.textContent = data[attr].unitime2;
                bachelorEl.innerHTML = data[attr].bachelor;
                expirienceEl.textContent = data[attr].expirience;
                getimeEl.textContent = data[attr].getime;
                geh1El.innerHTML = data[attr].geh1;
                gep1El.innerHTML = data[attr].gep1;
                geh2El.innerHTML = data[attr].geh2;
                gep2El.innerHTML = data[attr].gep2;
                geh3El.innerHTML = data[attr].geh3;
                gep3El.innerHTML = data[attr].gep3;
                geh4El.innerHTML = data[attr].geh4;
                gep4El.innerHTML = data[attr].gep4;
                gep41El.innerHTML = data[attr].gep41;
                gep42El.innerHTML = data[attr].gep42;
                gep43El.innerHTML = data[attr].gep43;
                festh1El.innerHTML = data[attr].festh1;
                festh2El.innerHTML = data[attr].festh2;
                festh3El.innerHTML = data[attr].festh3;
                festp1El.innerHTML = data[attr].festp1;
                asideskillsEl.textContent = data[attr].asideskills;
                asidehobbyEl.textContent = data[attr].asidehobby;
                asidehobby1El.innerHTML = data[attr].asidehobby1;
			});
		});
		
		var data = {
			  "english": 
			  {
                  "birth": "March 1991",
                  "adress": "Lodz, Poland",
                  "aboutme": "About me",
                  "goals": "Career goals",
                  "goals1": "I am an <b>experienced project engineer</b> in the energy sector, currently looking for an opportunity to <b>enter the IT industry</b>. I&nbsp;started my education with <b>object oriented programming</b> with <b>Java</b>, using basics I&nbsp;have learned at the University. At the same time I&nbsp;have expanded my knowledge about Projects with <b>Agile</b> approach and <b>Scrum</b> methodology. Because of my experience and interests in photography and video I&nbsp;have become interested in <b>front end</b>. I&nbsp;am developing my skills in <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>, I&nbsp;have also started my journey with <b>responsive websites</b> and <b>Bootstrap</b>.",
                  "goals2": " I believe that working in IT will allow me to develop my skills in terms of project/product work and cooperation with the team. To provide tailored solutions for the customer and end users.",
                  "skills": "Skills",
                  "soft": "Soft skills",
                  "soft1": "<li>Active listening</li><li>Fast learning and obtaining information</li><li>Problem solving</li><li>Teamwork</li><li>Accuracy and patience</li>",
                  "hard": "Hard skill",
                  "hard1": "<li>Java/JavaFX</li><li>Git</li><li>Agile/Scrum</li><li>HTML</li><li>CSS</li><li>JavaScript</li><li>English language - advanced</li><li>Basic knowledge:</li><ul><li>Maven</li><li>Spring</li><li>Bootstrap</li><li>Linux</li><li>Web theory</li></ul><li>Other:</li><ul><li>AVEVA PDMS/E3D software</li><li>roficiency in the usage of specialized documentation database</li><li>Creating, managing and reviewing technical documentation</li><li>Creating specifications</li><li>Smooth navigation in contract requirements - ToR (Terms of Reference)</li></ul>",
                  "education": "Education",
                  "university": "Lodz University of Technology",
                  "unitime": "March 2015 – June 2017",
                  "master": "<b>Mechanical Engineering</b><br>Master of Science",
                  "university2": "Lodz University of Technology – International Faculty of Engineering",
                  "unitime2": "October 2010 – December 2014",
                  "bachelor": "<b>Mechanical Engineering and Applied Computer Science</b><br>Bachelor of Science",
                  "expirience": "Professional experience",
                  "getime": "Employment period: December 2014 – June 2020",
                  "geh1": "Fast learning and obtaining information, Software: Plant Design and Management System",
                  "gep1": "In my first weeks in the company, I&nbsp;learned the industry-specific PDMS software used for 3D modeling of the entire power plant, including all buildings, installations and devices. To achieve this goal, I&nbsp;used my previous knowledge from studies and experience from other CAD programs, and in more difficult cases, I&nbsp;received invaluable help from my colleagues.",
                  "geh2": "Active listening, Smooth navigation in contract requirements - ToR (Terms of Reference)",
                  "gep2": "I actively participated in technical meetings with the Client and Suppliers, helping during the discussion on contract scopes, writing Minutes of Meeting (MoM) and presenting proposed solutions.",
                  "geh3": "Accuracy and patience, Usage of specialized documentation database (similar function as GitHub)",
                  "gep3": "I was responsible for reviewing technical documentation, as well as the timely flow and delivery of documentation to the Client, in accordance with the project schedule.",
                  "geh4": "Problem solving and teamwork, Agile/Scrum methodology",
                  "gep4": "In the last phase of the project, I&nbsp;was responsible for resolving warranty defects and faults. As everyone involved worked independently, I&nbsp;proposed weekly remote meetings to discuss the defect and fault log.",
                  "gep41": "Supported by some elements of the Scrum methodology, I&nbsp;tried to build a&nbsp;joint responsibility of the Warranty Engineers and the Supplier (Designer and Contractor) for the efficient removal of defects and faults.",
                  "gep42": "Every week, a list was discussed: including closed topics since the last meeting, those that were being solved and the newly reported by the Client.",
                  "gep43": "In the case of more serious defects, I&nbsp;coordinated the design work between various industry teams from different companies to help the Supplier deliver a&nbsp;solution that would ultimately be accepted by the Client.",
                  "festh1": "Project for Fest Architekci",
                  "festh2": "Execution period: February - March 2020",
                  "festh3": "Problem solving, creativity, fast learning and obtaining information, Knowledge of photo and video editing, Agile/Scrum methodology, New technologies",
                  "festp1": "The project was to take pictures of the church with a&nbsp;drone in order to make a&nbsp;3D model. The photos were taken in several iterations to refine the appropriate methodology that gives the best results in the 3D model. Since  the program creating the 3D model used by the Client, did not give satisfactory results, I&nbsp;additionally searched, tested and assembled photos in another program, providing the model of appropriate quality. 3D model link:",
                  "asideskills": "Main programming skills",
                  "asidehobby": "Interests",
                  "asidehobby1": "<b>Japanese cars</b><br><br><b>New technologies</b><br><br><b>Photography and video</b>",
			  },
			  "polish": 
			  {
                  "birth": "Marzec 1991",
                  "adress": "Łódz, Poland",
                  "aboutme": "O mnie",
                  "goals": "Cele zawodowe",
                  "goals1": 'Jestem <b>doświadczonym inżynierem projektu</b> w&nbsp;branży energetycznej, obecnie szukam możliwości <b>wejścia do branży IT</b>. Swoją naukę rozpocząłem od <b>Javy</b> i&nbsp;<b>programowania obiektowego</b>, ponieważ na studiach zdobyłem już pierwsze doświadczenie w&nbsp;tym temacie. Równolegle rozszerzyłem swoją wiedzę o&nbsp;<b>projektach</b> w&nbsp;ramach filozofii <b>Agile</b> i&nbsp;metodyki <b>Scrum</b>. Ze względu na doświadczenie oraz zainteresowanie fotografią i&nbsp;filmem zainteresowałem się <b>front-endem</b> i&nbsp;rozwijam moje umiejętności w <b>HTML</b>, <b>CSS</b> i&nbsp;<b>JavaScript</b>, a&nbsp;także zaczynam przygodę z&nbsp;<b>responsywnością</b> i&nbsp;<b>Bootstrapem</b>.',
                  "goals2": "Uważam, że branża IT pozwoli mi rozwinąć moje umiejętności w&nbsp;kwestii pracy nad projektem/produktem i&nbsp;współpracą z zespołem. Tak, aby dostarczać dopasowane rozwiązania dla Klienta i&nbsp;końcowego użytkownika.",
                  "skills": "Umiejętności",
                  "soft": "Umiejętności miękkie",
                  "soft1": "<li>Aktywne Słuchanie</li><li>Szybkie zdobywanie informacji i&nbsp;uczenie się</li><li>Rozwiązywanie problemów</li><li>Praca w zespole</li><li>Dokładność i&nbsp;cierpliwość</li>",
                  "hard": "Umiejętności twarde",
                  "hard1": "<li>Java/JavaFX</li><li>Git</li><li>Metodologia Agile/Scrum</li><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Język angielski - zaawansowany</li><li>Podstawowa znajomość:</li><ul><li>Maven</li><li>Spring</li><li>Bootstrap</li><li>Linux</li><li>Teoria sieci</li></ul><li>Pozostałe:</li><ul><li>Obsługa programu AVEVA PDMS/E3D</li><li>Obsługa firmowej bazy dokumentacji</li><li>Tworzenie, zarządzanie i&nbsp;opiniowanie dokumentacji technicznej</li><li>Tworzenie specyfikacji</li><li>Sprawne poruszanie się w wymaganiach kontraktowych (SIWZ)</li></ul>",
                  "education": "Wykształcenie",
                  "university": "Politechnika Łódzka",
                  "unitime": "marzec 2015 – czerwiec 2017",
                  "master": "<b>Mechanika i budowa maszyn</b><br>Magister inżynier",
                  "university2": "Politechnika Łódzka – Centrum Kształcenia Międzynarodowego",
                  "unitime2": "październik 2010 – grudzień 2014",
                  "bachelor": "<b>Mechanical Engineering and Applied Computer Science</b><br>Inżynier",
                  "expirience": "Doświadczenie zawodowe",
                  "getime": "Czas pracy: grudzień 2014 – czerwiec 2020",
                  "geh1": "Szybkie zdobywanie informacji i&nbsp;uczenie się, Program: Plant Desig nand Management System",
                  "gep1": "Na początku podjęcia pracy w&nbsp;firmie, nauczyłem się branżowego programu PDMS używanego do modelowania 3D całej elektrowni razem ze wszystkimi budynkami, instalacjami i&nbsp;urządzeniami. Wykorzystałem do tego moją dotychczasową wiedzę ze studiów i&nbsp;doświadczenie z innych programów CAD, a&nbsp;także w trudniejszych przypadkach, nieocenioną pomoc moich współpracowników.",
                  "geh2": "Aktywne słuchanie, Sprawne poruszanie się w&nbsp;wymaganiach kontraktowych (SIWZ)",
                  "gep2": "Aktywnie brałem udział w&nbsp;spotkaniach technicznych z&nbsp;Klientem oraz Poddostawcami, pomagając podczas dyskusji nad zakresami kontraktowymi, prowadząc MoMs (notatka ze spotkania), przedstawiając proponowane rozwiązania.",
                  "geh3": "Dokładność i&nbsp;cierpliwość, Obsługa firmowej bazy dokumentacji (podobna funkcja do GitHub)",
                  "gep3": "Opiniowanie dokumentacji technicznej, odpowiedzialność za terminowy spływ dokumentacji zgodnie z&nbsp;harmonogramem projektu oraz dostarczenie do Klienta.",
                  "geh4": "Rozwiązywanie problemów i&nbsp;praca w zespole, Metodologia Agile/Scrum",
                  "gep4": "W ostatniej fazie projektu byłem odpowiedzialny za rozwiązywanie wad i&nbsp;usterek gwarancyjnych. Ponieważ wszystkie zaangażowane osoby pracowały samodzielnie, zaproponowałem cotygodniowe, zdalne spotkania z&nbsp;omówieniem rejestru wad i&nbsp;usterek.",
                  "gep41": "Wspomagając się pewnymi elementami metodologii Scrum, starałem się zbudować wspólną odpowiedzialność Inżynierów Gwarancyjnych oraz Poddostawcy (Projektant i&nbsp;Wykonawca) za sprawne usuwanie wad i&nbsp;usterek.",
                  "gep42": "Co tydzień omawiana była lista tematów zamkniętych od ostatniego spotkania, tych które są w&nbsp;trakcie rozwiązywania oraz nowo zgłoszonych problemów przez Klienta.",
                  "gep43": "W przypadku poważniejszych wad koordynowałem prace projektowe między różnymi zespołami branżowymi z&nbsp;różnych firm, aby wspomóc Poddostawcę w&nbsp;dostarczeniu rozwiązania, które finalnie zostanie zaakceptowane przez Klienta.",
                  "festh1": "Zlecenie dla Fest Architekci",
                  "festh2": "Termin wykonania: luty - marzec 2020",
                  "festh3": "Rozwiązywanie problemów, kreatywność oraz szybkie uczenie się i&nbsp;zdobywanie informacji, Znajomość programów do obróbki zdjęć i&nbsp;filmów oraz metodolgia Agile/Scrum, Film i&nbsp;fotografia oraz nowe technologie",
                  "festp1": "Zlecenie polegało na wykonaniu zdjęć kościoła z&nbsp;użyciem drona, w &nbsp;elu wykonania modelu 3D. Zdjęcia były robione w kilku iteracjach, aby dopracować odpowiednią metodologię dającą najlepsze efekty w modelu 3D. Ponieważ program tworzący model, użyty przez Klienta nie dawał zadowalających rezultatów, dodatkowo samodzielnie odszukałem, przetestowałem i&nbsp;złożyłem zdjęcia w&nbsp;innym programie, dostarczając odpowiedniej jakości model. Link do modelu:",
                  "asideskills": "Główne umiejętności programistyczne",
                  "asidehobby": "Zainteresowania",
                  "asidehobby1": "<b>Japońska motoryzacja</b><br><br><b>Nowe technologie</b><br><br><b>Film i fotografia</b>",
              }
			}