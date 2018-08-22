#### Debug Process Crashes

Because of the complexity of indexing (like some unusual pdfs or other possible causes) we can have application process crashes. Process crashes are rather hard to debug so you may have to do the following to get debugging data:

  1. Open the Windows application "Event Viewer" on the server.
  2. Import custom view "last12hours_errors.xml" (see bottom file).
  3. You should see a list of errors so click "Save All Events in Custom View As..." and save the file (by default is .evtx format).
  4. Please send us the saved file, don't make it public as this could be used for hacking.