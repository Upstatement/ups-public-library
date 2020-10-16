git diff --name-only HEAD | while read filename; do
  if [[ "${filename##*.}" == "md" ]]; then
    last_modified=`date +"%Y-%m-%d"`
    sed -i "" "s|date:.*|date: $last_modified|g" "$filename"
  fi
done

git add .

# This sets all .md files to have the same last edit dates as the Git log.
# It shouldn't actually need to be run, but keeping it here for posterity.
# git ls-tree -r --name-only HEAD | while read filename; do
#   if [[ "${filename##*.}" == "md" ]]; then
#     last_modified="$(git log -1 --format="%ad" --date="short" -- $filename)"
#     sed -i "" "s|date:.*|date: $last_modified|g" "$filename"
#   fi
# done
