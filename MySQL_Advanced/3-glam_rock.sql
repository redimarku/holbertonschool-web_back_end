-- script to list all databases

SELECT band_name,
       -- Nëse banda ka vit split, përdoret ai; në të kundërt përdoret 2024
       IFNULL(split, 2024) - formed + 1 AS lifespan
FROM metal_bands
WHERE style LIKE "%Glam rock%"
ORDER BY lifespan DESC;