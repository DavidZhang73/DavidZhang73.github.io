# Nginx >= 1.29.3. Preserve the inherited security headers used in production.
add_header_inherit merge;
add_header Cache-Control $academic_cache_control always;
