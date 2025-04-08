// Sample data for stock items
let stockItems = JSON.parse(localStorage.getItem("stockItems"));
if (!Array.isArray(stockItems) || stockItems.length === 0) {
    stockItems = [
        { code: 'PS-001', article: 'Papier laser A3', quantity: 27 },
        { code: 'PS-002', article: 'Papier laser A4', quantity: 400 },
        { code: 'PS-003', article: 'Papier bulle mains', quantity: 4 },
        { code: 'PS-004', article: 'Papier entête avec logo', quantity: 139 },
        { code: 'PS-005', article: 'Ramette de papier vert', quantity: 213 },
        { code: 'PS-006', article: 'Enveloppes jaune G.F', quantity: 0 },
        { code: 'PS-007', article: 'Enveloppes jaune P.F', quantity: 163 },
        { code: 'PS-008', article: 'Enveloppe américain simple', quantity: 0 },
        { code: 'PS-009', article: 'Enveloppe américain entête', quantity: 12 },
        { code: 'PS-010', article: 'Pochette perforée plastique A4', quantity: 2 },
        { code: 'PS-011', article: 'Transparent', quantity: 0 },
        { code: 'CA-001', article: 'Chemise cartonnée', quantity: 0 },
        { code: 'CA-002', article: 'Chemises à rabat', quantity: 0 },
        { code: 'CA-003', article: 'Boîte archive cartonnée G.F', quantity: 0 },
        { code: 'CA-004', article: 'Boîte archive plastifiée', quantity: 175 },
        { code: 'CA-005', article: 'Luttin classeur', quantity: 33 },
        { code: 'CA-006', article: 'Luttin classeur 80 volets', quantity: 0 },
        { code: 'CA-007', article: 'Classeur', quantity: 3 },
        { code: 'CA-008', article: 'Parapheur', quantity: 30 },
        { code: 'CA-009', article: 'Serre feuille', quantity: 6 },
        { code: 'CA-010', article: 'Spiral', quantity: 18 },
        { code: 'CA-011', article: 'Dossier comptable', quantity: 7 },
        { code: 'CA-012', article: 'Boîte d\'archive cartonnée P.F', quantity: 36 },
        { code: 'IE-001', article: 'Stylos à bille', quantity: 1247 },
        { code: 'IE-002', article: 'Stylos pilote', quantity: 214 },
        { code: 'IE-003', article: 'Stylos marqueur', quantity: 69 },
        { code: 'IE-004', article: 'Stylos fluorescents', quantity: 17 },
        { code: 'IE-005', article: 'Stylos feutre noir', quantity: 67 },
        { code: 'IE-006', article: 'Crayon', quantity: 246 },
        { code: 'IE-007', article: 'Blanco', quantity: 71 },
        { code: 'IE-008', article: 'Gomme', quantity: 133 },
        { code: 'IE-009', article: 'Taille-crayon', quantity: 87 },
        { code: 'IE-010', article: 'Règle', quantity: 51 },
        { code: 'IE-011', article: 'Cahier 100p', quantity: 14 },
        { code: 'AA-001', article: 'Scotch transparent', quantity: 19 },
        { code: 'AA-002', article: 'Scotch emballage', quantity: 60 },
        { code: 'AA-003', article: 'Agrafe 8/4', quantity: 6 },
        { code: 'AA-004', article: 'Agrafe 24/6', quantity: 50 },
        { code: 'AA-005', article: 'Agrafe géant', quantity: 9 },
        { code: 'AA-006', article: 'Bracelets en plastique', quantity: 0.5 },
        { code: 'AA-007', article: 'Trombone', quantity: 100 },
        { code: 'TD-001', article: 'Ancreur', quantity: 0 },
        { code: 'TD-002', article: 'Ancreur à tampon', quantity: 14 },
        { code: 'TD-003', article: 'Dateur arabe', quantity: 24 },
        { code: 'TD-004', article: 'Dateur FRA', quantity: 23 },
        { code: 'TD-005', article: 'Recharge Trodat 12', quantity: 13 },
        { code: 'MBD-001', article: 'Bâton UHU', quantity: 118 },
        { code: 'MBD-002', article: 'UHU tube', quantity: 36 },
        { code: 'MBD-003', article: 'Post-it note', quantity: 91 },
        { code: 'MBD-004', article: 'Étiquette', quantity: 15 },
        { code: 'MBD-005', article: 'Ciseau (Sicseau)', quantity: 1 },
        { code: 'MBD-006', article: 'Graffeuse', quantity: 0 },
        { code: 'MBD-007', article: 'Master', quantity: 3 },
        { code: 'MBD-008', article: 'CD', quantity: 3 },
        { code: 'MBD-009', article: 'DVD', quantity: 7 },
        { code: 'MBD-010', article: 'Souris sans fil', quantity: 13 },
        { code: 'MBD-011', article: 'Souris avec fil', quantity: 1 },
        { code: 'MBD-012', article: 'Clé USB 16GB', quantity: 10 },
        { code: 'TN-001', article: 'Toner HP A85', quantity: 10 },
        { code: 'TN-002', article: 'Toner HP A80', quantity: 28 },
        { code: 'TN-003', article: 'Toner 56F 5000 Lexmark', quantity: 14 },
        { code: 'TN-004', article: 'Toner HP 310/311/312/313', quantity: 4 },
        { code: 'TN-005', article: 'Toner HP 17A', quantity: 10 },
        { code: 'TN-006', article: 'Toner Canon 57', quantity: 29 },
        { code: 'TN-007', article: 'Toner Canon C-EXV42 (pour photocopieuse)', quantity: 24 },
        { code: 'TN-008', article: 'Toner RIZO EZ Type E', quantity: 2 },
        { code: 'RG-001', article: 'Registre 2 mains', quantity: 0 },
        { code: 'RG-002', article: 'Registre 3 mains', quantity: 0 },
        { code: 'RG-003', article: 'Registre égalisation', quantity: 0 },
        { code: 'RG-004', article: 'Registre des départs', quantity: 4 },
        { code: 'RG-005', article: 'Registre arrivée', quantity: 7 },
        { code: 'RG-006', article: 'Registre transmission', quantity: 17 },
        { code: 'RG-007', article: 'Registre 5 mains', quantity: 41 }
    ];
    localStorage.setItem("stockItems", JSON.stringify(stockItems));
}

let history = JSON.parse(localStorage.getItem("history")) || [];


  
  

// Function to populate stock items in the dropdowns and table
function populateStock() {
    const articleSelect = document.getElementById('article');
    const articleExitSelect = document.getElementById('article-exit');
    const stockTableBody = document.getElementById('stock-table-body');
    stockItems = JSON.parse(localStorage.getItem("stockItems")) || [];

    stockItems.forEach(item => {
        // Pour le menu "Entrée", on affiche tous les articles
        const option = document.createElement('option');
        option.value = item.code;
        option.textContent = item.article;
        articleSelect.appendChild(option);
    
        // Pour le menu "Sortie", seulement si quantité > 0
        if (item.quantity > 0) {
            const exitOption = document.createElement('option');
            exitOption.value = item.code;
            exitOption.textContent = item.article;
            articleExitSelect.appendChild(exitOption);
        }

        // ✅ Ici on affiche la ligne dans le tableau "Stock Actuel"
        const row = document.createElement('tr');
        const displayQuantity = item.quantity === 0
            ? `<span class="text-red-600 font-bold">Stock vide</span>`
            : item.quantity;
        row.innerHTML = `<td>${item.code}</td><td>${item.article}</td><td>${displayQuantity}</td>`;
        stockTableBody.appendChild(row);
    });

    // Ajouter "Autre" à la fin de la liste d'entrée
    const autreOption = document.createElement('option');
    autreOption.value = 'autre';
    autreOption.textContent = 'Autre (ajout manuel)';
    articleSelect.appendChild(autreOption);
}


// Event listeners for forms
document.addEventListener('DOMContentLoaded', () => {
    populateStock();
    populateHistory();

    document.querySelector('#add-entry form').addEventListener('submit', (e) => {
        e.preventDefault();
        const articleCode = document.getElementById('article').value;
        const quantity = parseInt(document.getElementById('quantity-add').value);
    
        let item;
    
        if (articleCode === 'autre') {
            const customCode = document.getElementById('custom-code').value.trim();
            const customName = document.getElementById('custom-name').value.trim();
    
            if (!customCode || !customName) {
                alert("Veuillez remplir le code et le nom de l'article.");
                return;
            }
    
            item = stockItems.find(i => i.code === customCode);
            if (item) {
                item.quantity += quantity;
            } else {
                item = { code: customCode, article: customName, quantity: quantity };
                stockItems.push(item);
            }
        } else {
            item = stockItems.find(item => item.code === articleCode);
            if (item) {
                item.quantity += quantity;
            }
        }
    
        if (item) {
            localStorage.setItem("stockItems", JSON.stringify(stockItems));
            alert(`Ajouté ${quantity} unités de ${item.article}.`);
            history.push({
                date: new Date().toLocaleString(),
                type: 'Entrée',
                article: item.article,
                quantity: quantity,
                service: '-'
            });
            localStorage.setItem("history", JSON.stringify(history));
            location.reload(); // Reload to update the stock table
        }
    });
    

    document.querySelector('#add-exit form').addEventListener('submit', (e) => {
        e.preventDefault();
        const articleCode = document.getElementById('article-exit').value;
        const quantity = parseInt(document.getElementById('quantity-exit').value);
        const item = stockItems.find(item => item.code === articleCode);
    
        if (!item) {
            alert("Article introuvable.");
            return;
        }
    
        if (quantity > item.quantity) {
            alert(`⚠️ Stock insuffisant ! Il ne reste que ${item.quantity} unités de "${item.article}".`);
            return;
        }
    
        // Si tout va bien :
        item.quantity -= quantity;
        localStorage.setItem("stockItems", JSON.stringify(stockItems));
    
        const service = document.getElementById('service').value;
        history.push({
            date: new Date().toLocaleString(),
            type: 'Sortie',
            article: item.article,
            quantity: quantity,
            service: service
        });
        localStorage.setItem("history", JSON.stringify(history));
    
        alert(`✅ Retiré ${quantity} unités de ${item.article}.`);
        location.reload();
    });
    
    function populateHistory() {
        const tbody = document.getElementById("history-table-body");
        tbody.innerHTML = "";
        history = JSON.parse(localStorage.getItem("history")) || [];

        history.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.date}</td>
                <td>${entry.type}</td>
                <td>${entry.article}</td>
                <td>${entry.quantity}</td>
                <td>${entry.service}</td>
            `;
            tbody.appendChild(row);
        });
    }
   
});
function handleArticleChange() {
    const selected = document.getElementById("article").value;
    const customFields = document.getElementById("custom-article-fields");
    if (selected === "autre") {
        customFields.classList.remove("hidden");
    } else {
        customFields.classList.add("hidden");
    }
}
function clearHistory() {
    if (confirm("Voulez-vous vraiment supprimer tout l'historique ?")) {
        localStorage.removeItem("history");
        document.getElementById("history-table-body").innerHTML = "";
        alert("Historique supprimé avec succès.");
    }
}
