push:
	aws s3 rm s3://aat-build --recursive
	aws s3 cp dist s3://aat-build --recursive --acl public-read
