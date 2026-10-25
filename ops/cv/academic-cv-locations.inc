    location = /cv/cv.pdf {
        alias /www/cv-assets/public/cv.pdf;
        types { }
        default_type application/pdf;
        add_header Cache-Control "no-cache" always;
        add_header Content-Disposition 'inline; filename="cv.pdf"';
        add_header Strict-Transport-Security "max-age=31536000" always;
    }
    location = /cv/cv_zh.pdf {
        alias /www/cv-assets/public/cv_zh.pdf;
        types { }
        default_type application/pdf;
        add_header Cache-Control "no-cache" always;
        add_header Content-Disposition 'inline; filename="cv_zh.pdf"';
        add_header Strict-Transport-Security "max-age=31536000" always;
    }
    location ^~ /cv/ { return 404; }
