source_branch="dev"
target_branch="test"

rm -rf /tmp/backend/
cd /tmp

git clone git@github.com:quickorganics/backend.git
cd backend/

git checkout $source_branch
git pull
git checkout $target_branch
git pull
git checkout $source_branch 
git merge -s ours $target_branch --no-edit
git checkout $target_branch
git merge $source_branch --no-edit
git push
git checkout $source_branch
git push