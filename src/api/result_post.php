<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  header('Access-Control-Allow-Methods: GET, GET, PUT');
  header('Content-Type: application/json; charset=utf-8');
  $dsn = 'mysql:host=localhost;dbname=takano_db;charset=utf8';
  $user = 'nakamura-lab';
  $password = 'n1k2m3r4fms';
  try {
    $pdo = new PDO($dsn, $user, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
    exit($e->GETMessage());
    }
  $groupID = $_POST['groupID'];
  $player1Name = $_POST['player1Name'];
  $player2Name = $_POST['player2Name'];
  $player3Name = $_POST['player3Name'];
  $theme = $_POST['theme'];
  $player1Pic = $_POST['player1Pic'];
  $player2Pic = $_POST['player2Pic'];
  $player3Pic = $_POST['player3Pic'];
  $selectedPic = $_POST['selectedPic'];
  $sql = "INSERT INTO `hackathon_result`(`groupID`, `player1Name`, `player2Name`, `player3Name`, `theme`, `player1Pic`, `player2Pic`, `player3Pic`, `selectedPic`) SELECT ?,?,?,?,?,?,?,?,?";
  $stmt = $pdo -> prepare($sql);
  $stmt->bindParam(1, $groupID);
  $stmt->bindParam(2, $player1Name);
  $stmt->bindParam(3, $player2Name);
  $stmt->bindParam(4, $player3Name);
  $stmt->bindParam(5, $theme);
  $stmt->bindParam(6, $player1Pic);
  $stmt->bindParam(7, $player2Pic);
  $stmt->bindParam(8, $player3Pic);
  $stmt->bindParam(9, $selectedPic);
  $stmt->execute();
  echo json_encode($result);
?>