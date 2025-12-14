// ==================== COORDENADAS DE AEROPUERTOS ====================
const AIRPORTS = {
    LEGT: { lat: 40.2961, lng: -3.7208, name: 'Getafe (Madrid)' },
    TLS: { lat: 43.6291, lng: 1.3638, name: 'Toulouse-Blagnac' },
    CEG: { lat: 51.7519, lng: -1.5840, name: 'Broughton (Chester)' },
    XFW: { lat: 53.2253, lng: 10.3858, name: 'Hamburg-Finkenwerder' }
};

// ==================== BLUEPRINTS SVG ====================
const BLUEPRINTS = {
    htp: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="grid-htp" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(74,163,255,0.1)" stroke-width="0.5"/>
            </pattern>
        </defs>
        <rect width="200" height="100" fill="url(#grid-htp)"/>
        <!-- Horizontal Tail Plane -->
        <path d="M 40 50 L 100 30 L 160 50 L 100 70 Z" fill="none" stroke="#4aa3ff" stroke-width="2"/>
        <line x1="100" y1="30" x2="100" y2="70" stroke="#4aa3ff" stroke-width="1.5" stroke-dasharray="3,2"/>
        <circle cx="100" cy="50" r="3" fill="#4aff9d"/>
        <!-- Dimensiones -->
        <line x1="40" y1="80" x2="160" y2="80" stroke="#8fb5ff" stroke-width="0.5"/>
        <line x1="40" y1="75" x2="40" y2="85" stroke="#8fb5ff" stroke-width="0.5"/>
        <line x1="160" y1="75" x2="160" y2="85" stroke="#8fb5ff" stroke-width="0.5"/>
        <text x="100" y="92" text-anchor="middle" fill="#8fb5ff" font-size="8" font-family="monospace">18.0m</text>
        <!-- Anotaciones -->
        <text x="10" y="15" fill="#4aff9d" font-size="6" font-family="monospace">HTP</text>
        <text x="10" y="22" fill="#8fb5ff" font-size="5" font-family="monospace">A350</text>
    </svg>`,
    
    sec19: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="grid-sec19" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(74,163,255,0.1)" stroke-width="0.5"/>
            </pattern>
        </defs>
        <rect width="200" height="100" fill="url(#grid-sec19)"/>
        <!-- Section 19 Fuselage -->
        <ellipse cx="100" cy="50" rx="60" ry="20" fill="none" stroke="#4aa3ff" stroke-width="2"/>
        <line x1="40" y1="50" x2="160" y2="50" stroke="#4aa3ff" stroke-width="1.5"/>
        <rect x="70" y="40" width="60" height="20" fill="none" stroke="#4aa3ff" stroke-width="1" stroke-dasharray="2,2"/>
        <circle cx="100" cy="50" r="2" fill="#4aff9d"/>
        <!-- Frame lines -->
        <line x1="60" y1="30" x2="60" y2="70" stroke="#8fb5ff" stroke-width="0.5" opacity="0.5"/>
        <line x1="80" y1="32" x2="80" y2="68" stroke="#8fb5ff" stroke-width="0.5" opacity="0.5"/>
        <line x1="100" y1="30" x2="100" y2="70" stroke="#8fb5ff" stroke-width="0.5" opacity="0.5"/>
        <line x1="120" y1="32" x2="120" y2="68" stroke="#8fb5ff" stroke-width="0.5" opacity="0.5"/>
        <line x1="140" y1="30" x2="140" y2="70" stroke="#8fb5ff" stroke-width="0.5" opacity="0.5"/>
        <!-- Dimensiones -->
        <line x1="40" y1="80" x2="160" y2="80" stroke="#8fb5ff" stroke-width="0.5"/>
        <text x="100" y="92" text-anchor="middle" fill="#8fb5ff" font-size="8" font-family="monospace">9.0m</text>
        <text x="10" y="15" fill="#4aff9d" font-size="6" font-family="monospace">SEC19</text>
        <text x="10" y="22" fill="#8fb5ff" font-size="5" font-family="monospace">A320</text>
    </svg>`,
    
    wlc: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="grid-wlc" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(74,163,255,0.1)" stroke-width="0.5"/>
            </pattern>
        </defs>
        <rect width="200" height="100" fill="url(#grid-wlc)"/>
        <!-- Wing Lower Cover -->
        <path d="M 30 50 Q 50 30, 100 35 Q 150 30, 170 50 Q 150 55, 100 52 Q 50 55, 30 50 Z" fill="none" stroke="#4aa3ff" stroke-width="2"/>
        <line x1="30" y1="50" x2="170" y2="50" stroke="#4aa3ff" stroke-width="1" stroke-dasharray="3,2"/>
        <!-- Ribs -->
        <path d="M 60 35 Q 60 50, 60 52" stroke="#8fb5ff" stroke-width="0.5" opacity="0.6"/>
        <path d="M 80 33 Q 80 50, 80 53" stroke="#8fb5ff" stroke-width="0.5" opacity="0.6"/>
        <path d="M 100 35 Q 100 50, 100 52" stroke="#8fb5ff" stroke-width="0.5" opacity="0.6"/>
        <path d="M 120 33 Q 120 50, 120 53" stroke="#8fb5ff" stroke-width="0.5" opacity="0.6"/>
        <path d="M 140 35 Q 140 50, 140 52" stroke="#8fb5ff" stroke-width="0.5" opacity="0.6"/>
        <circle cx="100" cy="50" r="2" fill="#4aff9d"/>
        <!-- Dimensiones -->
        <line x1="30" y1="70" x2="170" y2="70" stroke="#8fb5ff" stroke-width="0.5"/>
        <text x="100" y="82" text-anchor="middle" fill="#8fb5ff" font-size="8" font-family="monospace">20.0m</text>
        <text x="10" y="15" fill="#4aff9d" font-size="6" font-family="monospace">WLC</text>
        <text x="10" y="22" fill="#8fb5ff" font-size="5" font-family="monospace">A330</text>
    </svg>`
};

// ==================== PIEZAS PREDEFINIDAS ====================
const CARGO_PARTS = {
    htp: { 
        id: 'htp',
        name: 'HORIZONTAL TAIL PLANE', 
        model: 'A350', 
        dims: '18.0 × 3.5 m', 
        weight: '7,000 kg',
        blueprint: BLUEPRINTS.htp
    },
    sec19: { 
        id: 'sec19',
        name: 'SECTION 19', 
        model: 'A320', 
        dims: '9.0 × 3.0 m', 
        weight: '3,300 kg',
        blueprint: BLUEPRINTS.sec19
    },
    wlc: { 
        id: 'wlc',
        name: 'WING LOWER COVER', 
        model: 'A330', 
        dims: '20.0 × 5.0 m', 
        weight: '12,500 kg',
        blueprint: BLUEPRINTS.wlc
    }
};

// ==================== ESTADO ====================
let state = {
    editMode: false,
    currentElement: null,
    currentField: '',
    currentCargoId: null,
    currentCargoType: null,
    selectingPartFor: null,
    arrival: {
        callsign: 'BGA123',
        eta: '14:35',
        airport: 'LEGT'
    },
    departure: {
        callsign: 'BGA456',
        etd: '16:00',
        airport: 'TLS'
    },
    altitude: '9,000',
    speed: '390',
    cargoLoad: {
        load1: { ...CARGO_PARTS.wlc, quantity: 2 },
        load2: { ...CARGO_PARTS.htp, quantity: 1 }
    },
    cargoUnload: {
        unload1: { ...CARGO_PARTS.sec19, quantity: 1 }
    },
    loadCounter: 3,
    unloadCounter: 2
};

// ==================== ELEMENTOS DOM ====================
const elements = {
    editBtn: document.getElementById('editBtn'),
    keyboard: document.getElementById('keyboard'),
    keyboardInput: document.getElementById('keyboard-input'),
    clock: document.getElementById('clock'),
    progressBar: document.getElementById('progressBar'),
    elapsedTime: document.getElementById('elapsed-time'),
    remainingTime: document.getElementById('remaining-time'),
    status: document.getElementById('status'),
    addLoadBtn: document.getElementById('addLoadBtn'),
    addUnloadBtn: document.getElementById('addUnloadBtn'),
    loadContainer: document.getElementById('load-container'),
    unloadContainer: document.getElementById('unload-container'),
    partPopup: document.getElementById('part-popup'),
    closePartPopup: document.getElementById('close-part-popup')
};

// Cargar SVGs en el popup
document.getElementById('svg-htp').innerHTML = BLUEPRINTS.htp;
document.getElementById('svg-sec19').innerHTML = BLUEPRINTS.sec19;
document.getElementById('svg-wlc').innerHTML = BLUEPRINTS.wlc;

// ==================== FUNCIONES DE TIEMPO (sin cambios) ====================
function parseTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function formatTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function getCurrentFlightProgress() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const etaMinutes = parseTime(state.arrival.eta);
    
    if (currentMinutes < etaMinutes) {
        return Math.min(66, (currentMinutes / etaMinutes) * 100);
    }
    return 66;
}

function updateFlightTimes() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const etaMinutes = parseTime(state.arrival.eta);
    
    if (currentMinutes > etaMinutes) {
        elements.elapsedTime.textContent = formatTime(currentMinutes - etaMinutes);
        elements.remainingTime.textContent = '00:00';
        elements.status.textContent = 'ARRIVED';
        elements.status.className = 'status arrived';
    } else {
        const remaining = etaMinutes - currentMinutes;
        elements.elapsedTime.textContent = '00:00';
        elements.remainingTime.textContent = formatTime(remaining);
        elements.status.textContent = 'EN ROUTE';
        elements.status.className = 'status enroute';
    }
    
    const progress = getCurrentFlightProgress();
    elements.progressBar.style.width = progress + '%';
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    elements.clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
setInterval(updateFlightTimes, 1000);
updateClock();
updateFlightTimes();

// ==================== MAPA (sin cambios significativos) ====================
const map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
    dragging: true,
    touchZoom: true,
    scrollWheelZoom: true
}).setView([47, 2], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
}).addTo(map);

let planeMarker = null, routeLine = null, arrivalMarkerMap = null, departureMarkerMap = null;

const planeIcon = L.divIcon({
    className: 'plane-marker',
    html: `<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #4aa3ff, #4aff9d); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(74, 163, 255, 0.8); border: 3px solid white; font-size: 20px; transform: rotate(-45deg);">✈</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

const airportIcon = L.divIcon({
    className: 'airport-marker',
    html: `<div style="width: 24px; height: 24px; background: rgba(74, 163, 255, 0.3); border: 3px solid #4aa3ff; border-radius: 50%; box-shadow: 0 0 20px rgba(74, 163, 255, 0.6);"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
});

function updateMap() {
    if (planeMarker) map.removeLayer(planeMarker);
    if (routeLine) map.removeLayer(routeLine);
    if (arrivalMarkerMap) map.removeLayer(arrivalMarkerMap);
    if (departureMarkerMap) map.removeLayer(departureMarkerMap);

    const arrival = AIRPORTS[state.arrival.airport];
    const departure = AIRPORTS[state.departure.airport];
    const progress = getCurrentFlightProgress() / 100;
    const planeLat = arrival.lat - (arrival.lat - departure.lat) * progress;
    const planeLng = arrival.lng - (arrival.lng - departure.lng) * progress;

    routeLine = L.polyline([[departure.lat, departure.lng], [planeLat, planeLng], [arrival.lat, arrival.lng]], {
        color: '#4aa3ff', weight: 3, opacity: 0.8, dashArray: '10, 10'
    }).addTo(map);

    planeMarker = L.marker([planeLat, planeLng], { icon: planeIcon }).addTo(map);
    arrivalMarkerMap = L.marker([arrival.lat, arrival.lng], { icon: airportIcon }).addTo(map);
    departureMarkerMap = L.marker([departure.lat, departure.lng], { icon: airportIcon }).addTo(map);

    map.fitBounds(L.latLngBounds([[arrival.lat, arrival.lng], [departure.lat, departure.lng]]), { padding: [80, 80] });
}

updateMap();
setInterval(() => {
    if (planeMarker && routeLine) {
        const arrival = AIRPORTS[state.arrival.airport];
        const departure = AIRPORTS[state.departure.airport];
        const progress = getCurrentFlightProgress() / 100;
        const planeLat = arrival.lat - (arrival.lat - departure.lat) * progress;
        const planeLng = arrival.lng - (arrival.lng - departure.lng) * progress;
        planeMarker.setLatLng([planeLat, planeLng]);
        routeLine.setLatLngs([[departure.lat, departure.lng], [planeLat, planeLng], [arrival.lat, arrival.lng]]);
    }
}, 5000);

// ==================== AEROPUERTOS ====================
document.querySelectorAll('.airport-card').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        const code = btn.getAttribute('data-code');
        document.querySelectorAll(`.airport-card[data-type="${type}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state[type].airport = code;
        updateMap();
    });
});

// ==================== MODO EDICIÓN ====================
elements.editBtn.addEventListener('click', () => {
    state.editMode = !state.editMode;
    elements.editBtn.classList.toggle('active');
    elements.addLoadBtn.classList.toggle('hidden', !state.editMode);
    elements.addUnloadBtn.classList.toggle('hidden', !state.editMode);
    document.querySelectorAll('.qty-controls').forEach(el => el.classList.toggle('hidden', !state.editMode));
    if (!state.editMode) hideKeyboard();
});

// ==================== SELECTOR DE PIEZAS ====================
function showPartSelector(cargoId, type) {
    state.selectingPartFor = { cargoId, type };
    elements.partPopup.classList.remove('hidden');
}

function hidePartSelector() {
    elements.partPopup.classList.add('hidden');
    state.selectingPartFor = null;
}

elements.closePartPopup.addEventListener('click', hidePartSelector);

document.querySelectorAll('.part-card').forEach(card => {
    card.addEventListener('click', () => {
        if (!state.selectingPartFor) return;
        
        const partId = card.getAttribute('data-part');
        const part = CARGO_PARTS[partId];
        const { cargoId, type } = state.selectingPartFor;
        
        const cargo = type === 'load' ? state.cargoLoad[cargoId] : state.cargoUnload[cargoId];
        Object.assign(cargo, { ...part, quantity: cargo.quantity });
        
        updateCargoDisplay(cargoId, type);
        hidePartSelector();
    });
});

// ==================== RENDER CARGO ====================
function updateCargoDisplay(cargoId, type) {
    const cargoEl = document.querySelector(`[data-cargo="${cargoId}"]`);
    if (!cargoEl) return;
    
    const cargo = type === 'load' ? state.cargoLoad[cargoId] : state.cargoUnload[cargoId];
    if (!cargo) return;
    
    cargoEl.querySelector('.cargo-name').textContent = cargo.name;
    cargoEl.querySelector('.cargo-dims').textContent = cargo.dims;
    cargoEl.querySelector('.cargo-weight').textContent = cargo.weight;
    cargoEl.querySelector('.cargo-model').textContent = cargo.model;
    cargoEl.querySelector('.cargo-qty').textContent = 'x' + cargo.quantity;
    
    if (cargo.blueprint) {
        cargoEl.querySelector('.cargo-blueprint-mini').innerHTML = cargo.blueprint;
    }
    
    cargoEl.querySelectorAll('.qty-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-qty')) === cargo.quantity);
    });
}

function createCargoElement(cargoId, type) {
    const cargo = type === 'load' ? state.cargoLoad[cargoId] : state.cargoUnload[cargoId];
    const cargoEl = document.createElement('div');
    cargoEl.className = `cargo ${type}-item`;
    cargoEl.setAttribute('data-cargo', cargoId);
    cargoEl.setAttribute('data-type', type);
    
    cargoEl.innerHTML = `
        <div class="cargo-main">
            <div class="cargo-name-wrapper">
                <div class="cargo-blueprint-mini">${cargo.blueprint || ''}</div>
                <div>
                    <strong class="cargo-name">${cargo.name}</strong>
                    <span class="cargo-model">${cargo.model}</span>
                </div>
            </div>
        </div>
        <div class="cargo-details">
            <small class="cargo-dims editable-cargo">${cargo.dims}</small>
            <em class="cargo-weight editable-cargo">${cargo.weight}</em>
        </div>
        <div class="qty-controls ${state.editMode ? '' : 'hidden'}">
            <div class="qty-buttons">
                ${[1,2,3,4,5].map(q => `<button class="qty-btn ${cargo.quantity === q ? 'active' : ''}" data-qty="${q}">x${q}</button>`).join('')}
            </div>
            <div class="current-qty">
                <span>QTY:</span>
                <strong class="cargo-qty">x${cargo.quantity}</strong>
            </div>
            <button class="remove-cargo-btn">×</button>
        </div>
    `;
    
    return cargoEl;
}

function initializeCargo() {
    elements.loadContainer.innerHTML = '';
    elements.unloadContainer.innerHTML = '';
    
    for (const id in state.cargoLoad) {
        elements.loadContainer.appendChild(createCargoElement(id, 'load'));
    }
    for (const id in state.cargoUnload) {
        elements.unloadContainer.appendChild(createCargoElement(id, 'unload'));
    }
    
    attachAllCargoListeners();
}

function attachAllCargoListeners() {
    document.querySelectorAll('.cargo').forEach(cargoEl => {
        const cargoId = cargoEl.getAttribute('data-cargo');
        const type = cargoEl.getAttribute('data-type');
        
        // Click en nombre para cambiar pieza
        cargoEl.querySelector('.cargo-name-wrapper').addEventListener('click', (e) => {
            if (!state.editMode) return;
            e.stopPropagation();
            showPartSelector(cargoId, type);
        });
        
        // Cantidad
        cargoEl.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!state.editMode) return;
                e.stopPropagation();
                const cargo = type === 'load' ? state.cargoLoad[cargoId] : state.cargoUnload[cargoId];
                cargo.quantity = parseInt(btn.getAttribute('data-qty'));
                updateCargoDisplay(cargoId, type);
            });
        });
        
        // Eliminar
        cargoEl.querySelector('.remove-cargo-btn').addEventListener('click', (e) => {
            if (!state.editMode) return;
            e.stopPropagation();
            if (type === 'load') delete state.cargoLoad[cargoId];
            else delete state.cargoUnload[cargoId];
            cargoEl.remove();
        });
        
        // Editar dims/weight
        cargoEl.querySelectorAll('.editable-cargo').forEach(el => {
            el.addEventListener('click', (e) => {
                if (!state.editMode) return;
                e.stopPropagation();
                document.querySelectorAll('.editable-cargo').forEach(x => x.classList.remove('edit-active'));
                el.classList.add('edit-active');
                
                const field = el.classList.contains('cargo-dims') ? 'dims' : 'weight';
                state.currentCargoId = cargoId;
                state.currentCargoType = type;
                state.currentField = `cargo-${type}-${field}`;
                showKeyboard(el, state.currentField);
            });
        });
    });
}

initializeCargo();

// Añadir carga/descarga
elements.addLoadBtn.addEventListener('click', () => {
    if (!state.editMode) return;
    const newId = 'load' + state.loadCounter++;
    state.cargoLoad[newId] = { ...CARGO_PARTS.htp, quantity: 1 };
    elements.loadContainer.appendChild(createCargoElement(newId, 'load'));
    attachAllCargoListeners();
});

elements.addUnloadBtn.addEventListener('click', () => {
    if (!state.editMode) return;
    const newId = 'unload' + state.unloadCounter++;
    state.cargoUnload[newId] = { ...CARGO_PARTS.sec19, quantity: 1 };
    elements.unloadContainer.appendChild(createCargoElement(newId, 'unload'));
    attachAllCargoListeners();
});

// ==================== TECLADO ====================
function showKeyboard(element, fieldName) {
    state.currentElement = element;
    state.currentField = fieldName;
    elements.keyboardInput.value = element.textContent.trim();
    elements.keyboard.classList.remove('hidden');
}

function hideKeyboard() {
    elements.keyboard.classList.add('hidden');
    state.currentElement = null;
    state.currentField = '';
    document.querySelectorAll('.editable, .editable-cargo, .field-value').forEach(el => {
        el.classList.remove('edit-active');
    });
}

document.querySelectorAll('.key:not(.special)').forEach(key => {
    key.addEventListener('click', () => elements.keyboardInput.value += key.textContent);
});

document.getElementById('key-backspace').addEventListener('click', () => {
    elements.keyboardInput.value = elements.keyboardInput.value.slice(0, -1);
});

document.getElementById('key-space').addEventListener('click', () => {
    elements.keyboardInput.value += ' ';
});

document.getElementById('key-cancel').addEventListener('click', hideKeyboard);

document.getElementById('key-save').addEventListener('click', () => {
    if (!state.currentElement || !state.currentField) return;
    
    const newValue = elements.keyboardInput.value.trim();
    state.currentElement.textContent = newValue;
    
    if (state.currentField.startsWith('cargo-')) {
        const parts = state.currentField.split('-');
        const type = parts[1];
        const field = parts[2];
        const cargo = type === 'load' ? state.cargoLoad[state.currentCargoId] : state.cargoUnload[state.currentCargoId];
        if (cargo) cargo[field] = newValue;
    }
    else if (state.currentField === 'arrival-callsign') state.arrival.callsign = newValue;
    else if (state.currentField === 'eta') { state.arrival.eta = newValue; updateMap(); updateFlightTimes(); }
    else if (state.currentField === 'departure-callsign') state.departure.callsign = newValue;
    else if (state.currentField === 'etd') { state.departure.etd = newValue; updateMap(); updateFlightTimes(); }
    else if (state.currentField === 'altitude') { state.altitude = newValue; updateMap(); }
    else if (state.currentField === 'speed') { state.speed = newValue; updateMap(); }
    
    hideKeyboard();
});

document.querySelectorAll('.field-value').forEach(el => {
    el.addEventListener('click', () => {
        if (!state.editMode) return;
        document.querySelectorAll('.field-value').forEach(x => x.classList.remove('edit-active'));
        el.classList.add('edit-active');
        showKeyboard(el, el.id);
    });
});

console.log('✈️ Beluga Operations System with Blueprints Ready!');