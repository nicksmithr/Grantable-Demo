git:
	git add .
	git commit -m "Commit"
	git push

deploy:
	npm run build
	aws s3 sync ./dist/ s3://demo.grantable.co.uk --acl public-read --cache-control max-age=100 --region eu-west-2 --profile admin

production:
		npm run build
		aws s3 sync ./dist/ s3://demo.grantable.co.uk --acl public-read --cache-control max-age=1000
