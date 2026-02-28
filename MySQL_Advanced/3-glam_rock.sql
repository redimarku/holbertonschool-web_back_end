SELECT band_name,
       COALESCE(split, 2023) - formed + 1 AS lifespan
FROM metal_bands
WHERE style = 'Glam rock'
ORDER BY lifespan DESC;