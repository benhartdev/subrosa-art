import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("subrosa");
        const works = db.collection("works");

        if (req.method === "GET") {
            // 🔍 Récupération des paramètres de filtre
            const { price, technique, dominantColors, limit, page, sort } = req.query;
            const filters = {};

            // 🎯 Filtrer par prix (ex: ?price=500-1500)
            if (price) {
                const [min, max] = price.split("-");
                filters.price = { $gte: Number(min), $lte: Number(max) };
            }

            // 🎨 Filtrer par technique (ex: ?technique=Peinture)
            if (technique) {
                filters.technique = technique;
            }

            // 🌈 Filtrer par couleurs dominantes (ex: ?dominantColors=Bleu,Noir)
            if (dominantColors) {
                filters.dominantColors = { $in: dominantColors.split(",") };
            }

            // Pagination : limite & page
            const itemsPerPage = parseInt(limit) || 10;
            const pageNumber = parseInt(page) || 1;
            const skip = (pageNumber - 1) * itemsPerPage;

            // tri : Par defaut, prix croissant
            let sortOption = { price : 1 };
            if (sort === "desc") {
                sortOption.price = -1;
            }

            // 🔄 Exécuter la requête avec les filtres
            const data = await works.find(filters)
            .sort(sortOption)
            .skip(skip)
            .limit(itemsPerPage)
            .toArray();

            res.status(200).json({
                page: pageNumber,
                limit: itemsPerPage,
                total: totalWorks,
                data
            }); 
        
        
    
        } else if (req.method === "POST") {
            // ➕ Ajouter une œuvre
            const newWork = req.body;
            if (!newWork.name || !newWork.price) {
                return res.status(400).json({ message: "Nom et prix requis" });
            }
            const result = await works.insertOne(newWork);
            res.status(201).json(result);
        } else if (req.method === "PUT") {
            // ✏️ Modifier une œuvre
            const { id, ...updatedData } = req.body;
            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ message: "ID invalide" });
            }
            const result = await works.updateOne(
                { _id: new ObjectId(id) },
                { $set: updatedData }
            );
            res.json(result);
        } else if (req.method === "DELETE") {
            // 🗑️ Supprimer une œuvre
            const { id } = req.body;
            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ message: "ID invalide" });
            }
            const result = await works.deleteOne({ _id: new ObjectId(id) });
            res.json(result);
        } else {
            res.status(405).json({ message: "Méthode non autorisée" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
}
