push:
	aws s3 rm s3://aat-web-build --recursive --profile aat
	aws s3 cp dist s3://aat-web-build --recursive --acl public-read --profile aat
	aws cloudfront create-invalidation --distribution-id E1QA06XYHAOJZA --paths /index.html --profile aat
