
const recettes = [
    {
        id: 1,
        nom: 'Poulet rôti',
        ingredients: ['1 poulet', 'beurre', 'sel', 'poivre'],
        instructions: ['Préchauffer le four à 180°C', 'Enduire le poulet de beurre', 'Saler et poivrer', 'Enfourner pendant 1h30'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_9232.jpg',
        categorie: 'Plat principal',
        difficulte: 'facile',
        temps: 90
    },
    {
        id: 2,
        nom: 'Tarte aux pommes',
        ingredients: ['pâte brisée', 'pommes', 'sucre', 'cannelle'],
        instructions: ['Préchauffer le four à 200°C', 'Étaler la pâte dans un moule', 'Éplucher et couper les pommes en lamelles', 'Disposer les pommes sur la pâte', 'Saupoudrer de sucre et de cannelle', 'Enfourner pendant 30 minutes'],
        photo: 'https://tfpj-s3.troisfoisparjour.com/app/uploads/2020/10/21165803/tarte_classique-l-718x1024.jpg',
        categorie: 'Dessert',
        difficulte: 'moyenne',
        temps: 30
    },
    {
        id: 3,
        nom: 'Salade César',
        ingredients: ['salade', 'poulet', 'parmesan', 'croûtons', 'sauce César'],
        instructions: ['Laver et essorer la salade', 'Cuire le poulet et le couper en morceaux', 'Râper le parmesan', 'Disposer la salade dans un saladier', 'Ajouter le poulet, le parmesan et les croûtons', 'Arroser de sauce César'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_8440.jpg',
        categorie: 'Entrée',
        difficulte: 'facile',
        temps: 15
    },
    {
        id: 4,
        nom: 'Pâtes carbonara',
        ingredients: ['spaghetti', 'lardons', 'crème fraîche', 'parmesan', 'œufs'],
        instructions: ['Faire cuire les pâtes al dente', 'Faire revenir les lardons', 'Mélanger les œufs, la crème et le parmesan', 'Égoutter les pâtes et les mélanger avec la sauce', 'Ajouter les lardons'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_a-patecarbonararic-hiver1-2020-0535-dds.jpg',
        categorie: 'Plat principal',
        difficulte: 'moyenne',
        temps: 30
    },
    {
        id: 5,
        nom: 'Gâteau au chocolat',
        ingredients: ['chocolat', 'beurre', 'sucre', 'farine', 'œufs'],
        instructions: ['Préchauffer le four à 180°C', 'Faire fondre le chocolat et le beurre', 'Mélanger le sucre, la farine et les œufs', 'Ajouter le chocolat fondu', 'Enfourner pendant 25 minutes'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_4525.jpg',
        categorie: 'Dessert',
        difficulte: 'difficile',
        temps: 25
    },
    {
        id: 6,
        nom: 'Salade niçoise',
        ingredients: ['salade', 'thon', 'œufs', 'tomates', 'olives', 'haricots verts', 'vinaigrette'],
        instructions: ['Laver et essorer la salade', 'Cuire les œufs', 'Égoutter le thon', 'Couper les tomates en quartiers', 'Disposer tous les ingrédients dans un saladier', 'Arroser de vinaigrette'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_9042.jpg',
        categorie: 'Entrée',
        difficulte: 'facile',
        temps: 20
    },
    {
        id: 7,
        nom: 'Ratatouille',
        ingredients: ['aubergine', 'courgette', 'poivron', 'tomate', 'oignon', 'ail', 'huile d\'olive'],
        instructions: ['Éplucher et couper les légumes en morceaux', 'Faire revenir les oignons et l\'ail', 'Ajouter les légumes et laisser mijoter', 'Assaisonner et servir'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_5312.jpg',
        categorie: 'Plat principal',
        difficulte: 'moyenne',
        temps: 45
    },
    {
        id: 8,
        nom: 'Tarte au citron',
        ingredients: ['pâte sablée', 'citron', 'sucre', 'œufs', 'beurre'],
        instructions: ['Préchauffer le four à 180°C', 'Étaler la pâte dans un moule', 'Mélanger le jus de citron, le sucre, les œufs et le beurre fondu', 'Verser la préparation sur la pâte', 'Enfourner pendant 30 minutes'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_5101.jpg',
        categorie: 'Dessert',
        difficulte: 'moyenne',
        temps: 30
    },
    {
        id: 9,
        nom: 'Quiche lorraine',
        ingredients: ['pâte brisée', 'lardons', 'crème fraîche', 'œufs', 'fromage râpé'],
        instructions: ['Préchauffer le four à 180°C', 'Étaler la pâte dans un moule', 'Faire revenir les lardons', 'Mélanger les œufs, la crème et le fromage', 'Verser la préparation sur la pâte', 'Enfourner pendant 30 minutes'],
        photo: 'https://images.ricardocuisine.com/services/recipes/496x670_5058.jpg',
        categorie: 'Plat principal',
        difficulte: 'moyenne',
        temps: 30
    }
]

export default recettes;
