# SET
$inputFolder = ""
$outputFile = ""


# WORKLOAD
$results = @()

Get-ChildItem -Path $inputFolder "*.txt" | ForEach-Object {
$file = $_.FullName
Write-Host $file.Length

if($file.Length -lt 1000) {
 
		Get-Content $file | ForEach-Object {
			$line = $_.Trim()
			$parts = $line -split ":"
 

			if($parts.Count -ge 3) {
 
				$extractedText = ($parts[1..2] -join ":").Trim()
				$lastPart = $parts[-1].Trim()
				$number = $lastPart
				$results += "$extractedText : $number"
 
			}
		}
	}
}

$results | Out-File -Encoding UTF8 -FilePath $outputFile

Write-Host "Processed $($results.Count) entries. Output saved to $outputFile"