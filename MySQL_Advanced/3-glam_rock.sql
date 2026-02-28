-- script to list all databases
SELECT band_name,
       COALESCE(split, 2023) - formed + 1 AS lifespan
FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;