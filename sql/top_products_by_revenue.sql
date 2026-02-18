SELECT
    product_id,
    SUM(unit_price * quantity) AS revenue
FROM
    Order_items
GROUP BY
    prodcut_id
ORDER BY
    revenue DESC
LIMIT 3;