document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.getElementById('desktop');
    const folderBar = document.getElementById('folder-bar');
    const newNoteBtn = document.getElementById('new-note-btn');
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    // --- Data Structure ---
    const desktopData = [
        {
            folderName: 'Office',
            icon: 'Office.png',
            color: 'green',
            services: [
                { name: 'Gemini', url: 'https://gemini.google.com', icon: 'Gemini.png' },
                { name: 'Gmail', url: 'https://mail.google.com', icon: 'Gmail.png' },
                { name: 'Calendar', url: 'https://calendar.google.com', icon: 'Calendar.png' },
                { name: 'Tasks', url: 'https://tasks.google.com/tasks/', icon: 'Tasks.png' },
                { name: 'Contacts', url: 'https://contacts.google.com/', icon: 'Contacts.png' },
                { name: 'GDrive', url: 'https://drive.google.com', icon: 'GDrive.png' },
                { name: 'Photos', url: 'https://photos.google.com/', icon: 'Photos.png' },
                { name: 'Keep', url: 'https://keep.google.com', icon: 'Keep.png' },
                { name: 'Docs', url: 'https://docs.google.com', icon: 'Docs.png' },
                { name: 'Sheets', url: 'https://sheets.google.com', icon: 'Sheets.png' },
                { name: 'Slides', url: 'https://slides.google.com', icon: 'Slides.png' },
                { name: 'Forms', url: 'https://docs.google.com/forms', icon: 'Forms.png' },
                { name: 'Sites', url: 'https://sites.google.com/', icon: 'Sites.png' },
                { name: 'Vids', url: 'https://docs.google.com/videos', icon: 'Vids.png' },
                { name: 'Draw', url: 'https://docs.google.com/drawings', icon: 'Draw.png' },
                { name: 'App Script', url: 'https://script.google.com/', icon: 'AppScript.png' },
                { name: 'NotebookLM', url: 'https://notebooklm.google.com/', icon: 'NotebookLM.png' },
                { name: 'Chat', url: 'https://mail.google.com/chat', icon: 'Chat.png' },
                { name: 'Meet', url: 'http://meet.google.com/', icon: 'Meet.png' },
                { name: 'Classroom', url: 'https://classroom.google.com/', icon: 'Classroom.png' },
                { name: 'Blogger', url: 'http://www.Blogger.com', icon: 'Blogger.png' },
                { name: 'Adsense', url: 'https://adsense.google.com/adsense', icon: 'AdSense.png' },
                { name: 'Finance', url: 'https://www.google.com/finance', icon: 'Finance.png' },
                { name: 'One', url: 'https://one.google.com/', icon: 'one.png' },
                { name: 'Passwords', url: 'https://passwords.google.com/', icon: 'Password.png' },
                { name: 'Recorder', url: 'https://recorder.google.com/', icon: 'Recorder.png' },
                { name: 'Interests', url: 'https://www.google.ch/interests/saved', icon: 'Saves.png' },
                { name: 'Trends', url: 'https://trends.google.de/trends', icon: 'Trends.png' },
                { name: 'Wallet', url: 'https://wallet.google.com/', icon: 'Wallet.png' },
                { name: 'Find', url: 'https://www.google.com/android/find/', icon: 'FindMy.png' }
            ]
        },
        {
            folderName: 'Media',
            icon: 'Photos.png',
            color: 'red',
            services: [
                { name: 'Home', url: 'https://home.google.com/', icon: 'Home.png' },
                { name: 'YouTube', url: 'https://youtube.com', icon: 'YouTube.png' },
                { name: 'Studio', url: 'https://studio.youtube.com/', icon: 'Studio.png' },
                { name: 'Music', url: 'https://music.youtube.com/', icon: 'Music.png' },
                { name: 'Books', url: 'https://play.google.com/books', icon: 'Books.png' },
                { name: 'News', url: 'https://news.google.com/', icon: 'News.png' },
                { name: 'Photos', url: 'https://photos.google.com/', icon: 'Photos.png' }
            ]
        },
        {
            folderName: 'Travel',
            icon: 'Travel.png',
            color: 'yellow',
            services: [
                { name: 'Maps', url: 'https://www.google.com/maps', icon: 'Maps.png' },
                { name: 'Earth', url: 'https://earth.google.com/', icon: 'earth.png' },
                { name: 'Travel', url: 'https://www.google.com/travel', icon: 'Travel.png' },
                { name: 'Flights', url: 'https://www.google.com/travel/flights', icon: 'Flight.png' },
                { name: 'Translate', url: 'https://translate.google.com/', icon: 'Translate.png' }
            ]
        },
        {
            folderName: 'Creativity',
            icon: 'Flow.png',
            color: 'blue',
            services: [
                { name: 'Flow TV', url: 'https://labs.google/flow/tv', icon: 'Flow.png' },
                { name: 'Storybook', url: 'https://gemini.google.com/gem/storybook', icon: 'Storybook.png' },
                { name: 'Google Fonts', url: 'https://fonts.google.com/', icon: 'Fonts.png' },
                { name: 'Emoji Kitchen', url: 'https://emojikitchen.dev/', icon: 'Kittchen.png' },
                { name: 'Experiments', url: 'https://experiments.withgoogle.com/', icon: 'Experiments.png' },
                { name: 'Earth Studio', url: 'https://www.google.com/intl/de/earth/studio/', icon: 'EarthStudio.png' },
                { name: 'Tabmaker', url: 'https://experiments.withgoogle.com/tabmaker', icon: 'TabMaker.png' },
                { name: 'Webdesigner', url: 'https://webdesigner.withgoogle.com', icon: 'WebDesigner.png' },
                { name: 'Whisk', url: 'https://labs.google/fx/de/tools/whisk/project', icon: 'Wisk.png' }
            ]
        },
        {
            folderName: 'Coding',
            icon: 'Firebase.png',
            color: 'green',
            services: [
                { name: 'App Script', url: 'https://script.google.com/', icon: 'AppScript.png' },
                { name: 'Firebase', url: 'https://studio.firebase.google.com', icon: 'Firebase.png' },
                { name: 'Jules', url: 'https://jules.google.com/', icon: 'Jules.png' },
                { name: 'AI Studio', url: 'https://aistudio.google.com/', icon: 'Gemini.png' },
                { name: 'Colab', url: 'https://colab.research.google.com/', icon: 'Collab.png' },
                { name: 'Flutter', url: 'https://flutter.dev/', icon: 'Flutter.png' },
                { name: 'Spatial Creator', url: 'https://developers.google.com/ar/geospatialcreato', icon: 'Spatial.png' },
                { name: 'Go', url: 'https://go.dev/', icon: 'Go.png' },
                { name: 'Google I/O', url: 'https://io.google/', icon: 'IO.png' },
                { name: 'Opal', url: 'https://opal.google/', icon: 'Opal.png' },
                { name: 'Webdesigner', url: 'https://webdesigner.withgoogle.com', icon: 'WebDesigner.png' }
            ]
        },
        {
            folderName: 'Shopping',
            icon: 'Shopping.png',
            color: 'blue',
            services: [
                { name: 'Shopping', url: 'https://www.google.de/shopping', icon: 'Shopping.png' },
                { name: 'Play Store', url: 'https://play.google.com/', icon: 'Playstore.png' },
                { name: 'Google Store', url: 'https://store.google.com/', icon: 'Store.png' },
                { name: 'Wallet', url: 'https://wallet.google.com/', icon: 'Wallet.png' }
            ]
        },
        {
            folderName: 'Info',
            icon: 'Info.png',
            color: 'blue',
            align: 'bottom',
            services: [
                {
                    name: 'About GDesk',
                    icon: 'Text.png',
                    text: `
                        <h2>Welcome to GDesk!</h2>
                        <p>GDesk is a lightweight, privacy-focused desktop environment for your browser. It provides quick access to your favorite Google services and includes a simple note-taking feature.</p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li><b>No Login Required:</b> GDesk does not require you to log in or create an account.</li>
                            <li><b>Local Storage:</b> All your notes are saved directly in your browser\'s local storage. No data is sent to the cloud.</li>
                            <li><b>Privacy:</b> GDesk does not have access to your data within Google services. It only opens them in a new tab for your convenience.</li>
                        </ul>
                        <h3>How to Use:</h3>
                        <p>Simply click on a folder to open it. Double-click on a service to open it in a new tab. You can create new notes by clicking the "New Note" button. Notes can be dragged around and will save their position and content automatically.</p>
                    `
                },
                {
                    name: 'Wallpaper',
                    icon: 'WallpaperIcon.png',
                    action: 'openWallpaperChanger'
                },
                {
                    name: 'PayPal.me',
                    icon: 'PayPalme.png',
                    url: 'https://www.paypal.com/paypalme/HansjuergWuethrich'
                }
            ]
        }
    ];

    // --- Functions ---

    const setActiveWindow = (windowElement) => {
        // Remove .active from all windows
        document.querySelectorAll('.window').forEach(win => win.classList.remove('active'));
        // Add .active to the target window
        if (windowElement) {
            windowElement.classList.add('active');
        }
    };

    const makeDraggable = (windowElement) => {
        const header = windowElement.querySelector('.window-header');
        let isDragging = false;
        let offsetX, offsetY;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - windowElement.offsetLeft;
            offsetY = e.clientY - windowElement.offsetTop;
            
            setActiveWindow(windowElement);
            header.style.cursor = 'grabbing';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            const desktopRect = desktop.getBoundingClientRect();
            newX = Math.max(0, Math.min(newX, desktopRect.width - windowElement.offsetWidth));
            newY = Math.max(0, Math.min(newY, desktopRect.height - windowElement.offsetHeight));

            windowElement.style.left = `${newX}px`;
            windowElement.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            header.style.cursor = 'move';
        });
    };

    const openTextWindow = (service) => {
        const windowElement = document.createElement('div');
        windowElement.className = 'window';

        const openWindows = document.querySelectorAll('.window').length;
        windowElement.style.top = `${50 + (openWindows * 30)}px`;
        windowElement.style.left = `${120 + (openWindows * 30)}px`;

        const header = document.createElement('div');
        header.className = 'window-header';
        
        const title = document.createElement('span');
        title.className = 'window-title';
        title.textContent = service.name;
        
        const closeBtn = document.createElement('div');
        closeBtn.className = `window-close-btn window-close-btn-red`;
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            windowElement.classList.remove('open');
            setTimeout(() => {
                desktop.removeChild(windowElement);
            }, 200);
        });

        header.appendChild(title);
        header.appendChild(closeBtn);

        const content = document.createElement('div');
        content.className = 'window-content text-window-content';
        content.innerHTML = service.text;

        windowElement.appendChild(header);
        windowElement.appendChild(content);

        desktop.appendChild(windowElement);
        makeDraggable(windowElement);
        setActiveWindow(windowElement);

        setTimeout(() => {
            windowElement.classList.add('open');
        }, 10);

        windowElement.addEventListener('mousedown', () => {
            setActiveWindow(windowElement);
        });
    };

    const openWindow = (folderData) => {
        const existingWindow = document.querySelector(`.window[data-folder="${folderData.folderName}"]`);
        if (existingWindow) {
            setActiveWindow(existingWindow);
            return;
        }

        const windowElement = document.createElement('div');
        windowElement.className = 'window';
        windowElement.dataset.folder = folderData.folderName;

        const numServices = folderData.services.length;
        if (numServices > 0) {
            const iconsPerRow = 5;
            const numRows = Math.ceil(numServices / iconsPerRow);
            const iconHeight = 70; // Approximate height of an icon including name and margin
            const contentPadding = 40; // 20px top and bottom
            const headerHeight = 30;
            const calculatedHeight = headerHeight + contentPadding + (numRows * iconHeight) + ((numRows - 1) * 20); // 20px gap between rows
            const finalHeight = Math.max(150, calculatedHeight);
            windowElement.style.height = `${finalHeight}px`;
        }

        const openWindows = document.querySelectorAll('.window').length;
        windowElement.style.top = `${30 + (openWindows * 30)}px`;
        windowElement.style.left = `${100 + (openWindows * 30)}px`;

        const header = document.createElement('div');
        header.className = 'window-header';
        
        const title = document.createElement('span');
        title.className = 'window-title';
        title.innerHTML = `<img src="Images/DesignElement.png" style="height: 15px; margin-right: 8px; vertical-align: middle;"> ${folderData.folderName}`;
        
        const closeBtn = document.createElement('div');
        closeBtn.className = `window-close-btn window-close-btn-${folderData.color || 'red'}`;
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            windowElement.classList.remove('open');
            setTimeout(() => {
                desktop.removeChild(windowElement);
            }, 200);
        });

        header.appendChild(title);
        header.appendChild(closeBtn);

        const content = document.createElement('div');
        content.className = 'window-content';

        folderData.services.forEach(service => {
            const serviceLink = document.createElement('a');
            serviceLink.className = 'service-icon';
            
            if(service.url) {
                serviceLink.href = service.url;
                serviceLink.target = '_blank';
                serviceLink.rel = 'noopener noreferrer';
            }

            serviceLink.addEventListener('click', (e) => e.preventDefault());
            serviceLink.addEventListener('dblclick', () => {
                if (service.action === 'openWallpaperChanger') {
                    openWallpaperChangerWindow();
                } else if (service.text) {
                    openTextWindow(service);
                } else if (service.url) {
                    const width = 1200;
                    const height = 800;
                    const left = (screen.width / 2) - (width / 2);
                    const top = (screen.height / 2) - (height / 2);
                    window.open(service.url, '_blank', `popup=true,width=${width},height=${height},left=${left},top=${top}`);
                }
            });

            const img = document.createElement('img');
            img.className = 'service-icon-img';
            img.src = `Images/${service.icon}`;
            img.alt = service.name;

            const name = document.createElement('span');
            name.className = 'service-icon-name';
            name.textContent = service.name;

            serviceLink.appendChild(img);
            serviceLink.appendChild(name);
            content.appendChild(serviceLink);
        });

        windowElement.appendChild(header);
        windowElement.appendChild(content);

        desktop.appendChild(windowElement);
        makeDraggable(windowElement);
        setActiveWindow(windowElement);

        setTimeout(() => {
            windowElement.classList.add('open');
        }, 10);

        windowElement.addEventListener('mousedown', () => {
            setActiveWindow(windowElement);
        });
    };

    const renderFolders = () => {
        folderBar.innerHTML = '';
        desktopData.forEach(folder => {
            const folderElement = document.createElement('div');
            folderElement.className = 'folder';

            if (folder.align === 'bottom') {
                folderElement.classList.add('folder-align-bottom');
            }

            const icon = document.createElement('div');
            icon.className = 'folder-icon';
            icon.style.backgroundImage = `url(Images/${folder.icon})`;

            const name = document.createElement('span');
            name.className = 'folder-name';
            name.textContent = folder.folderName;

            folderElement.appendChild(icon);
            folderElement.appendChild(name);

            folderElement.addEventListener('click', () => openWindow(folder));

            folderBar.appendChild(folderElement);
        });
    };

    // --- Notes Widget ---
    const makeNoteDraggable = (noteElement) => {
        const header = noteElement.querySelector('.note-header'); // Target the header
        let isDragging = false;
        let offsetX, offsetY;

        header.addEventListener('mousedown', (e) => { // Mousedown on header
            isDragging = true;
            offsetX = e.clientX - noteElement.offsetLeft;
            offsetY = e.clientY - noteElement.offsetTop;
            noteElement.style.zIndex = 400; // Bring to front
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            const desktopRect = desktop.getBoundingClientRect();
            newX = Math.max(0, Math.min(newX, desktopRect.width - noteElement.offsetWidth));
            newY = Math.max(0, Math.min(newY, desktopRect.height - noteElement.offsetHeight));

            noteElement.style.left = `${newX}px`;
            noteElement.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                noteElement.style.zIndex = 350; // Reset z-index
                saveNotes(); // Save position after dragging
            }
        });
    };

    const saveNotes = () => {
        const notes = [];
        const desktopRect = desktop.getBoundingClientRect();
        if (desktopRect.width === 0 || desktopRect.height === 0) return;
        document.querySelectorAll('.note-widget').forEach(noteElement => {
            const left = (parseFloat(noteElement.style.left) / desktopRect.width) * 100;
            const top = (parseFloat(noteElement.style.top) / desktopRect.height) * 100;
            notes.push({
                id: noteElement.dataset.id,
                content: noteElement.querySelector('textarea').value,
                left: `${left}%`,
                top: `${top}%`
            });
        });
        localStorage.setItem('gdesk-notes', JSON.stringify(notes));
    };

    const createNote = (noteData = {}) => {
        const { id = Date.now(), content = '', left = '25%', top = '25%' } = noteData;
        const desktopRect = desktop.getBoundingClientRect();

        const noteElement = document.createElement('div');
        noteElement.className = 'note-widget';
        noteElement.dataset.id = id;

        if (left.includes('px')) {
            noteElement.style.left = `${(parseFloat(left) / desktopRect.width) * 100}%`;
        } else {
            noteElement.style.left = left;
        }

        if (top.includes('px')) {
            noteElement.style.top = `${(parseFloat(top) / desktopRect.height) * 100}%`;
        } else {
            noteElement.style.top = top;
        }

        noteElement.style.zIndex = 350;

        const header = document.createElement('div');
        header.className = 'note-header';

        const closeBtn = document.createElement('div');
        closeBtn.className = 'note-close-btn';
        closeBtn.innerHTML = '×';
        closeBtn.addEventListener('click', () => {
            desktop.removeChild(noteElement);
            saveNotes();
        });

        header.appendChild(closeBtn);

        const textarea = document.createElement('textarea');
        textarea.value = content;
        textarea.placeholder = 'Write here....';
        textarea.addEventListener('input', saveNotes);

        noteElement.appendChild(header);
        noteElement.appendChild(textarea);
        desktop.appendChild(noteElement);
        makeNoteDraggable(noteElement);
    };

    const loadNotes = () => {
        const savedNotes = JSON.parse(localStorage.getItem('gdesk-notes') || '[]');
        savedNotes.forEach(noteData => createNote(noteData));
    };

    newNoteBtn.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const desktopRect = desktop.getBoundingClientRect();
        const noteWidth = 240; // As defined in style.css
        createNote({
            left: `${rect.right - desktopRect.left - noteWidth}px`,
            top: `${rect.bottom - desktopRect.top + 10}px`
        });
    });

    const debounce = (func, delay) => {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const repositionNotes = () => {
        const desktopRect = desktop.getBoundingClientRect();
        if (desktopRect.width === 0 || desktopRect.height === 0) return; // Avoid division by zero

        document.querySelectorAll('.note-widget').forEach(noteElement => {
            if (noteElement.offsetWidth === 0 || noteElement.offsetHeight === 0) return; // Skip if not rendered

            let leftPercent = parseFloat(noteElement.style.left);
            let topPercent = parseFloat(noteElement.style.top);

            // Clamp left/top to be at least 0
            if (leftPercent < 0) leftPercent = 0;
            if (topPercent < 0) topPercent = 0;

            // Check right boundary
            const noteWidthPercent = (noteElement.offsetWidth / desktopRect.width) * 100;
            if (leftPercent + noteWidthPercent > 100) {
                leftPercent = 100 - noteWidthPercent;
            }

            // Check bottom boundary
            const noteHeightPercent = (noteElement.offsetHeight / desktopRect.height * 100);
            if (topPercent + noteHeightPercent > 100) {
                topPercent = 100 - noteHeightPercent;
            }

            noteElement.style.left = `${leftPercent}%`;
            noteElement.style.top = `${topPercent}%`;
        });
        saveNotes();
    };

    const updateDateTime = () => {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        if (timeElement) timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        if (dateElement) dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
    };

    const fetchStockPrice = () => {
        const apiKey = 'd3v5169r01qt2cto3klgd3v5169r01qt2cto3km0'; // Hardcoded API Key
        const stockPriceElement = document.getElementById('stock-price');

        fetch(`https://finnhub.io/api/v1/quote?symbol=GOOGL&token=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (stockPriceElement && data) {
                    const price = data.c.toFixed(2);
                    const change = data.d.toFixed(2);
                    const changePercent = data.dp.toFixed(2);
                    
                    let changeHtml = '';
                    if (change > 0) {
                        changeHtml = `<span style="color: var(--google-green);">+${change} (+${changePercent}%)</span>`;
                    } else {
                        changeHtml = `<span style="color: var(--google-red);">${change} (${changePercent}%)</span>`;
                    }

                    stockPriceElement.innerHTML = `GOOGL: ${price}$ ${changeHtml}`;
                }
            })
            .catch(error => {
                console.error('Error fetching stock price:', error);
                if(stockPriceElement) {
                    stockPriceElement.innerHTML = 'Error loading stock price.';
                }
            });
    };

    // --- Theme Switching ---
    const themeSwitch = document.getElementById('checkbox');
    const themeIcon = document.getElementById('theme-icon');

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            document.querySelector('.header-title').style.backgroundImage = "url('Images/GDeskLogoDark.png')";
            if (themeIcon) themeIcon.src = 'Images/BrightModeIcon.png';
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            document.querySelector('.header-title').style.backgroundImage = "url('Images/GDeskLogo.png')";
            if (themeIcon) themeIcon.src = 'Images/DarkModeIcon.png';
        }
    });

    if (themeIcon) {
        themeIcon.addEventListener('click', () => {
            themeSwitch.click();
        });
    }

    const loadTheme = () => {
        const theme = localStorage.getItem('theme');
        const themeIcon = document.getElementById('theme-icon');
        if (theme === 'dark') {
            themeSwitch.checked = true;
            document.body.classList.add('dark-theme');
            document.querySelector('.header-title').style.backgroundImage = "url('Images/GDeskLogoDark.png')";
            if (themeIcon) themeIcon.src = 'Images/BrightModeIcon.png';
        } else {
            themeSwitch.checked = false;
            document.body.classList.remove('dark-theme');
            document.querySelector('.header-title').style.backgroundImage = "url('Images/GDeskLogo.png')";
            if (themeIcon) themeIcon.src = 'Images/DarkModeIcon.png';
        }
    };

    // --- Wallpaper Logic ---
    const applyWallpaper = (path) => {
        const wallpaperLayer = document.getElementById('wallpaper-layer');
        if (!wallpaperLayer) return;

        const defaultWallpaper = 'Images/DefaultWallpaper.png';
        let pathToApply = path;

        if (path === 'none' || !path) {
            pathToApply = defaultWallpaper;
        }

        wallpaperLayer.style.backgroundImage = `url('${pathToApply}')`;
    };

    const initWallpaper = () => {
        const savedWallpaper = localStorage.getItem('gdesk-wallpaper');
        applyWallpaper(savedWallpaper);
    };

    const openWallpaperChangerWindow = () => {
        const windowId = 'wallpaper-changer-window';
        // Prevent opening multiple windows
        if (document.getElementById(windowId)) {
            setActiveWindow(document.getElementById(windowId));
            return;
        }

        const windowElement = document.createElement('div');
        windowElement.className = 'window';
        windowElement.id = windowId;
        windowElement.style.width = '300px';
        windowElement.style.height = '200px';

        const openWindows = document.querySelectorAll('.window').length;
        windowElement.style.top = `${60 + (openWindows * 30)}px`;
        windowElement.style.left = `${150 + (openWindows * 30)}px`;

        const header = document.createElement('div');
        header.className = 'window-header';
        
        const title = document.createElement('span');
        title.className = 'window-title';
        title.textContent = 'Wallpaper';
        
        const closeBtn = document.createElement('div');
        closeBtn.className = 'window-close-btn window-close-btn-yellow';

        const closeAction = () => {
            // Revert to saved wallpaper on close without save
            const savedWallpaper = localStorage.getItem('gdesk-wallpaper');
            applyWallpaper(savedWallpaper);
            windowElement.classList.remove('open');
            setTimeout(() => desktop.removeChild(windowElement), 200);
        };

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAction();
        });

        header.appendChild(title);
        header.appendChild(closeBtn);

        const content = document.createElement('div');
        content.className = 'window-content';
        // Setup for positioning
        content.style.position = 'relative';
        content.style.display = 'flex';
        content.style.justifyContent = 'center';
        content.style.alignItems = 'flex-start';
        content.style.padding = '20px';


        // Dropdown
        const wallpaperSelect = document.createElement('select');
        wallpaperSelect.style.width = '100%';
        wallpaperSelect.style.padding = '5px';
        const wallpapers = [
            { name: 'Default', path: 'Images/DefaultWallpaper.png' },
            { name: 'Wallpaper 1', path: 'Images/Wallpaper001.png' },
            { name: 'Wallpaper 2', path: 'Images/Wallpaper002.png' },
            { name: 'Wallpaper 3', path: 'Images/Wallpaper003.png' },
            { name: 'Wallpaper 4', path: 'Images/Wallpaper004.png' },
            { name: 'Wallpaper 5', path: 'Images/Wallpaper005.png' },
            { name: 'Wallpaper 6', path: 'Images/Wallpaper006.png' },
            { name: 'Wallpaper 7', path: 'Images/Wallpaper007.png' }
        ];
        wallpapers.forEach(wallpaper => {
            const option = document.createElement('option');
            option.value = wallpaper.path;
            option.textContent = wallpaper.name;
            wallpaperSelect.appendChild(option);
        });

        // Handle custom wallpaper option
        const savedWallpaper = localStorage.getItem('gdesk-wallpaper');
        if (savedWallpaper && savedWallpaper.startsWith('data:image')) {
            const customOption = document.createElement('option');
            customOption.value = savedWallpaper;
            customOption.textContent = 'My Wallpaper';
            customOption.id = 'custom-wallpaper-option';
            wallpaperSelect.appendChild(customOption);
        }

        // Set current selection
        wallpaperSelect.value = savedWallpaper || 'Images/DefaultWallpaper.png';
        
        // Preview wallpaper on change
        wallpaperSelect.addEventListener('change', (e) => {
            applyWallpaper(e.target.value);
        });

        // Upload Button
        const uploadInput = document.createElement('input');
        uploadInput.type = 'file';
        uploadInput.accept = 'image/*';
        uploadInput.style.display = 'none';
        uploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            // Size limit (e.g., 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('File is too large! Please choose an image smaller than 2MB.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const dataUrl = event.target.result;
                let customOption = document.getElementById('custom-wallpaper-option');
                if (!customOption) {
                    customOption = document.createElement('option');
                    customOption.id = 'custom-wallpaper-option';
                    customOption.textContent = 'My Wallpaper';
                    wallpaperSelect.appendChild(customOption);
                }
                customOption.value = dataUrl;
                wallpaperSelect.value = dataUrl;
                applyWallpaper(dataUrl);
            };
            reader.readAsDataURL(file);
        });

        const uploadLabel = document.createElement('label');
        uploadLabel.textContent = 'Upload Image';
        uploadLabel.style.cursor = 'pointer';
        uploadLabel.style.textAlign = 'center';
        uploadLabel.style.padding = '4px 8px';
        uploadLabel.style.fontSize = '12px';
        uploadLabel.style.backgroundColor = 'var(--google-blue)';
        uploadLabel.style.color = 'white';
        uploadLabel.style.borderRadius = '6px';
        uploadLabel.style.fontWeight = '500';
        uploadLabel.addEventListener('click', () => uploadInput.click());
        // Position it
        uploadLabel.style.position = 'absolute';
        uploadLabel.style.left = '15px';
        uploadLabel.style.bottom = '15px';

        // Button Container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'absolute';
        buttonContainer.style.right = '15px';
        buttonContainer.style.bottom = '15px';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';

        // Cancel Button
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.style.padding = '4px 8px';
        cancelBtn.style.fontSize = '12px';
        cancelBtn.style.cursor = 'pointer';
        cancelBtn.style.border = 'none';
        cancelBtn.style.backgroundColor = 'var(--google-red)';
        cancelBtn.style.color = 'white';
        cancelBtn.style.borderRadius = '6px';
        cancelBtn.style.fontWeight = '500';
        cancelBtn.addEventListener('click', closeAction);


        // Save Button
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'SAVE';
        saveBtn.style.padding = '4px 8px';
        saveBtn.style.fontSize = '12px';
        saveBtn.style.cursor = 'pointer';
        saveBtn.style.border = 'none';
        saveBtn.style.backgroundColor = 'var(--google-green)';
        saveBtn.style.color = 'white';
        saveBtn.style.borderRadius = '6px';
        saveBtn.style.fontWeight = '500';
        saveBtn.addEventListener('click', () => {
            localStorage.setItem('gdesk-wallpaper', wallpaperSelect.value);
            // Close window
            windowElement.classList.remove('open');
            setTimeout(() => desktop.removeChild(windowElement), 200);
        });
        
        buttonContainer.appendChild(cancelBtn);
        buttonContainer.appendChild(saveBtn);

        content.appendChild(wallpaperSelect);
        content.appendChild(uploadInput);
        content.appendChild(uploadLabel);
        content.appendChild(buttonContainer);

        windowElement.appendChild(header);
        windowElement.appendChild(content);

        desktop.appendChild(windowElement);
        makeDraggable(windowElement);
        setActiveWindow(windowElement);

        setTimeout(() => windowElement.classList.add('open'), 10);
        windowElement.addEventListener('mousedown', () => setActiveWindow(windowElement));
    };

    // --- Initial Load ---
    loadTheme();
    initWallpaper();
    renderFolders();
    loadNotes();
    updateDateTime();
    fetchStockPrice();
    setInterval(updateDateTime, 1000);
});